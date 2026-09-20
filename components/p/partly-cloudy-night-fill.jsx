import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5e1h9k9m.css';
import '../../css/g/grny65b5z.css';
import '../../css/y/yvq0q9f5t.css';
import '../../css/i/iazd5_bwo.css';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGsJRxDb0X" viewBox="0 0 172 172"><path fill="url(#SVGZtvutewA)" class="v5e1h9k9m"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"/></path></symbol><symbol id="SVGMnBDAb4I" viewBox="0 0 350 222"><path fill="url(#SVGMeEfudbH)" class="grny65b5z"/></symbol><symbol id="SVG28kZBITK" viewBox="0 0 351 246"><use width="172" height="172" href="#SVGsJRxDb0X"/><use width="350" height="222" href="#SVGMnBDAb4I" transform="translate(1 24)"/></symbol><linearGradient id="SVGMeEfudbH" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="yvq0q9f5t"/><stop offset=".5" class="yvq0q9f5t"/><stop offset="1" class="iazd5_bwo"/></linearGradient><linearGradient id="SVGZtvutewA" x1="34.7" x2="119.2" y1="18.6" y2="165" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient></defs><use width="351" height="246" href="#SVG28kZBITK" transform="translate(80 121)"/>`,
		"fallback": "meteocons:partly-cloudy-night-fill",
	});
}

export default Component;
