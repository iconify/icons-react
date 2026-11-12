import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgbsngblv.css';
import '../../css/x/xdl23sb0e.css';
import '../../css/z/zjhvbexqd.css';
import '../../css/p/pgeacdcrj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG2nHAkcAv" x1="97.5" x2="522" y1="205.9" y2="451" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><path fill="url(#SVG2nHAkcAv)" class="zjhvbexqd"/><linearGradient id="SVGkyfYeDzd" x1="94.2" x2="518.7" y1="211.6" y2="456.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><path fill="url(#SVGkyfYeDzd)" class="pgeacdcrj"/>`,
		"fallback": "selfhst:jellyfin",
	});
}

export default Component;
