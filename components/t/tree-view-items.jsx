import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehswywxmb.css';
import '../../css/d/d5yos5bwm.css';
import '../../css/r/ryeirgb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.63 10.87)" class="ehswywxmb"/><rect transform="matrix(0 -1 -1 0 18.63 22.33)" class="ehswywxmb"/><rect transform="matrix(0 -1 -1 0 18.63 10.87)" class="d5yos5bwm"/><rect transform="matrix(0 -1 -1 0 18.63 22.33)" class="d5yos5bwm"/><path class="ryeirgb_g"/></g>`,
		"fallback": "andrsrxn:tree-view-items",
	});
}

export default Component;
