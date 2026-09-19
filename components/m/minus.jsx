import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3l6og77c.css';
import '../../css/m/mx_vpj2hx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i3l6og77c"/><path class="mx_vpj2hx"/></g>`,
		"fallback": "pepicons:minus",
	});
}

export default Component;
