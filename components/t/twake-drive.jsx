import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw9kb-yer.css';
import '../../css/w/w6k954b6m.css';
import '../../css/k/khgnvy6uq.css';
import '../../css/u/u05ew8cbm.css';
import '../../css/h/hdwnbccmm.css';
import '../../css/p/p-jthnbmf.css';
import '../../css/a/ayquiqbjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGIDuCfeHm" x1="457.22" x2="318.602" y1="662.468" y2="573.968" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset=".13" class="vw9kb-yer"/><stop offset=".61" class="w6k954b6m"/><stop offset="1" class="khgnvy6uq"/></linearGradient><path fill="url(#SVGIDuCfeHm)" class="u05ew8cbm"/><linearGradient id="SVG1Xhnye6G" x1="290.134" x2="130.134" y1="465.733" y2="785.733" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hdwnbccmm"/><stop offset=".563" class="p-jthnbmf"/></linearGradient><path fill="url(#SVG1Xhnye6G)" class="u05ew8cbm"/><path class="ayquiqbjy"/>`,
		"fallback": "selfhst:twake-drive",
	});
}

export default Component;
