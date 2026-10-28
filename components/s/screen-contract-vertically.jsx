import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy678_ybm.css';
import '../../css/l/l7d2d6bch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 15.78 1.73)" class="gy678_ybm"/><path class="l7d2d6bch"/></g>`,
		"fallback": "andrsrxn:screen-contract-vertically",
	});
}

export default Component;
