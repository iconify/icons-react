import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k16gslnbh.css';
import '../../css/t/t9k02ccqj.css';
import '../../css/z/z-ds9n2dv.css';
import '../../css/k/kl7ukhbxv.css';
import '../../css/j/j0zw4ybfu.css';
import '../../css/w/wo730-dxl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k16gslnbh"/><path class="t9k02ccqj"/><g class="z-ds9n2dv"><path class="kl7ukhbxv"/><path class="j0zw4ybfu"/><path class="wo730-dxl"/></g>`,
		"fallback": "openmoji:swipe-left",
	});
}

export default Component;
