import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-cnhtb7g.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-cnhtb7g"/>`,
		"fallback": "jam:unordered-list",
	});
}

export default Component;
