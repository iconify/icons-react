import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akqouxm0s.css';
import '../../css/a/aedbiubbd.css';
import '../../css/c/c2666qbyo.css';
import '../../css/q/qh6qg07ln.css';
import '../../css/j/jajpddrxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akqouxm0s"/><linearGradient id="SVGN64GfetH" x1="61.827" x2="447.193" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="aedbiubbd"/><stop offset=".474" class="c2666qbyo"/><stop offset="1" class="qh6qg07ln"/></linearGradient><path fill="url(#SVGN64GfetH)" class="jajpddrxu"/>`,
		"fallback": "selfhst:plexamp",
	});
}

export default Component;
