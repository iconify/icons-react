import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z86srdbpn.css';
import '../../css/z/z2i7s751c.css';
import '../../css/w/w5i3j0ajh.css';
import '../../css/z/ziihwcc0a.css';
import '../../css/t/tzha2aczg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG2Deusdca" x1="-25.047" x2="537.047" y1="93.737" y2="418.263" gradientUnits="userSpaceOnUse"><stop offset="0" class="z86srdbpn"/><stop offset="1" class="z2i7s751c"/></linearGradient><path fill="url(#SVG2Deusdca)" class="w5i3j0ajh"/><path class="ziihwcc0a"/><path class="tzha2aczg"/>`,
		"fallback": "selfhst:strava",
	});
}

export default Component;
