import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-y1gkbdg.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-y1gkbdg"/>`,
		"fallback": "jam:user",
	});
}

export default Component;
