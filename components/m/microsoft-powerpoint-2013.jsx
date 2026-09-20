import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8oet6b0x.css';
import '../../css/e/ehn23cc1g.css';
import '../../css/z/zw3du41cv.css';
import '../../css/q/qr4kgza0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGumliPbrf" x1="256" x2="256" y1="490.8" y2="25.2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="u8oet6b0x"/><stop offset="1" class="ehn23cc1g"/></linearGradient><path fill="url(#SVGumliPbrf)" class="zw3du41cv"/><path class="qr4kgza0j"/>`,
		"fallback": "selfhst:microsoft-powerpoint-2013",
	});
}

export default Component;
