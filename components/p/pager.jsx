import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc636cy2y.css';
import '../../css/k/k_z2hubvw.css';
import '../../css/c/czqzp-bby.css';
import '../../css/q/qm3ehwbxj.css';
import '../../css/g/gjbb3abqw.css';
import '../../css/e/ercfrbxiv.css';
import '../../css/u/u0n28bbtj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc636cy2y"/><path class="k_z2hubvw"/><path class="czqzp-bby"/><path class="qm3ehwbxj"/><circle class="gjbb3abqw"/><circle class="ercfrbxiv"/><path class="u0n28bbtj"/>`,
		"fallback": "fxemoji:pager",
	});
}

export default Component;
