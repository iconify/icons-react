import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3p-lq76v.css';
import '../../css/g/gzr0kmt2d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3p-lq76v"/><path class="gzr0kmt2d"/></g>`,
		"fallback": "streamline-color:keyboard-wireless-2",
	});
}

export default Component;
