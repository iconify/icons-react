import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/c/cnm3yzw0g.css';
import '../../css/x/xj_-zbbvm.css';
import '../../css/s/seaw1wbjn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="cnm3yzw0g"/><g filter="url(#SVGSmh8CbvI)"><path class="xj_-zbbvm"/></g><path class="seaw1wbjn"/><defs><filter id="SVGSmh8CbvI" width="58.502" height="109.765" x="111.09" y="126.635" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_148_1050" stdDeviation="6.44"/></filter></defs></g>`,
		"fallback": "skill-icons:v-dark",
	});
}

export default Component;
