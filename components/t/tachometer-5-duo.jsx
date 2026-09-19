import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8ebzs-6d.css';
import '../../css/k/kcc_vbbob.css';
import '../../css/y/y15340b1j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8ebzs-6d"/><path class="kcc_vbbob"/><path class="y15340b1j"/></g>`,
		"fallback": "glyphs:tachometer-5-duo",
	});
}

export default Component;
