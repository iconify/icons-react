import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otcw29bmb.css';
import '../../css/y/ytbqrnbul.css';
import '../../css/p/p4w94cbds.css';
import '../../css/c/cg21vfbml.css';
import '../../css/m/mj70ulbbk.css';
import '../../css/r/rr5dh3n1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGtg8kFcoB" x1="527.495" x2="527.495" y1="389.152" y2="-576.999" gradientTransform="matrix(.5287 0 0 -.5287 -22.864 206.964)" gradientUnits="userSpaceOnUse"><stop offset="0" class="otcw29bmb"/><stop offset=".5" class="ytbqrnbul"/><stop offset="1" class="p4w94cbds"/></linearGradient><path fill="url(#SVGtg8kFcoB)" class="cg21vfbml"/><path class="mj70ulbbk"/><path class="rr5dh3n1t"/>`,
		"fallback": "selfhst:uptime-monitor",
	});
}

export default Component;
