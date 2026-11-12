import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw9kb-yer.css';
import '../../css/w/w6k954b6m.css';
import '../../css/k/khgnvy6uq.css';
import '../../css/u/u05ew8cbm.css';
import '../../css/h/hdwnbccmm.css';
import '../../css/p/p-jthnbmf.css';
import '../../css/t/trhu_pbbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGMCSyEcwG" x1="457.2" x2="318.6" y1="384.5" y2="296" gradientUnits="userSpaceOnUse"><stop offset=".13" class="vw9kb-yer"/><stop offset=".61" class="w6k954b6m"/><stop offset="1" class="khgnvy6uq"/></linearGradient><path fill="url(#SVGMCSyEcwG)" class="u05ew8cbm"/><linearGradient id="SVGYH5NkdEd" x1="290.1" x2="130.1" y1="187.7" y2="507.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="hdwnbccmm"/><stop offset=".563" class="p-jthnbmf"/></linearGradient><path fill="url(#SVGYH5NkdEd)" class="u05ew8cbm"/><path class="trhu_pbbd"/>`,
		"fallback": "selfhst:twake-drive",
	});
}

export default Component;
