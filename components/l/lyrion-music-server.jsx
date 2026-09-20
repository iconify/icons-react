import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk_lp_wlk.css';
import '../../css/a/a3hz4ubdx.css';
import '../../css/t/tsrmwqbrs.css';
import '../../css/p/p9rimibmf.css';
import '../../css/q/qcrhuvb5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGTSxJHbFm" x1="256" x2="256" y1="3" y2="513" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wk_lp_wlk"/><stop offset=".258" class="a3hz4ubdx"/><stop offset=".663" class="tsrmwqbrs"/><stop offset="1"/></linearGradient><path fill="url(#SVGTSxJHbFm)" class="p9rimibmf"/><path class="qcrhuvb5q"/>`,
		"fallback": "selfhst:lyrion-music-server",
	});
}

export default Component;
