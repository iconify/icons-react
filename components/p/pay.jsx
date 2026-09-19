import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oix0-iyqu.css';
import '../../css/i/ikey9rbvk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="oix0-iyqu"/><path class="ikey9rbvk"/></g>`,
		"fallback": "cryptocurrency-color:pay",
	});
}

export default Component;
