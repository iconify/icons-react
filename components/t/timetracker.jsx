import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnlevi9fk.css';
import '../../css/a/aanitn30d.css';
import '../../css/z/zaxwpyb8k.css';
import '../../css/z/zz333hbei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG2Vhxmcaw" x1="-701.502" x2="-700.359" y1="796.44" y2="795.297" gradientTransform="matrix(448 0 0 -448 314273 356805)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnlevi9fk"/><stop offset="1" class="aanitn30d"/></linearGradient><path fill="url(#SVG2Vhxmcaw)" class="zaxwpyb8k"/><path class="zz333hbei"/>`,
		"fallback": "selfhst:timetracker",
	});
}

export default Component;
