import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgniksc_l.css';
import '../../css/o/obin-pbyc.css';
import '../../css/w/wl2vi-wfs.css';
import '../../css/v/vr6050b8a.css';
import '../../css/e/e7siu6r3e.css';
import '../../css/q/qsam29but.css';
import '../../css/u/u2r7j-bxu.css';
import '../../css/r/re66l4b7g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mgniksc_l"/><path class="obin-pbyc"/><path class="wl2vi-wfs"/><path class="vr6050b8a"/><path clip-rule="evenodd" class="e7siu6r3e"/><path class="qsam29but"/><path class="u2r7j-bxu"/><path class="re66l4b7g"/>`,
		"fallback": "openmoji:pirate-flag",
	});
}

export default Component;
