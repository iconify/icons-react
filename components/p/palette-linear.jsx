import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i1vfzkb9v.css';
import '../../css/e/ehgxs22fz.css';
import '../../css/c/ctgpv1blf.css';
import '../../css/w/w9x56_fne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i1vfzkb9v"/><path class="ehgxs22fz"/><path class="ctgpv1blf"/><path class="w9x56_fne"/></g>`,
		"fallback": "solar:palette-linear",
	});
}

export default Component;
