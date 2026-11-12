import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fef2p4b2l.css';
import '../../css/r/r2rl9cbwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGx4Gp1bCt" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="fef2p4b2l"/><stop offset="1"/></linearGradient><path fill="url(#SVGx4Gp1bCt)" class="r2rl9cbwe"/>`,
		"fallback": "selfhst:wastebin-dark",
	});
}

export default Component;
