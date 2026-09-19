import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyk0ubp-p.css';
import '../../css/v/vpapvkb4b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zyk0ubp-p"/><path class="vpapvkb4b"/></g>`,
		"fallback": "cryptocurrency-color:lend",
	});
}

export default Component;
