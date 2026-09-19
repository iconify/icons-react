import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocwzk9s4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocwzk9s4f"/>`,
		"fallback": "guidance:surgery",
	});
}

export default Component;
