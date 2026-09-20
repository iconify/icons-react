import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';
import '../../css/o/ou-rhibbk.css';
import '../../css/x/xd-la1bue.css';
import '../../css/h/hq2lhabny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGpS2jccQh" x1="54.3" x2="187.2" y1="29" y2="259.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient><clipPath id="SVGzpDhEbnf"><path class="ou-rhibbk"/></clipPath><symbol id="SVG7sC0PeQg" viewBox="0 0 270 270"><path fill="url(#SVGpS2jccQh)" class="xd-la1bue"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"/></path></symbol></defs><path class="hq2lhabny"/><g clip-path="url(#SVGzpDhEbnf)"><use width="270" height="270" href="#SVG7sC0PeQg" transform="translate(121 121)"/></g>`,
		"fallback": "meteocons:moonset-fill",
	});
}

export default Component;
