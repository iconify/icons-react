import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjfrddibl.css';
import '../../css/f/f8rijjxcb.css';
import '../../css/h/h6631mvpm.css';
import '../../css/e/ek6lthb7o.css';
import '../../css/h/h-8cbyq4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGVG45wdIa" x1="115.3" x2="179.7" y1="91.3" y2="202.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="xjfrddibl"/><stop offset=".5" class="xjfrddibl"/><stop offset="1" class="f8rijjxcb"/></linearGradient><symbol id="SVGBW98RcUv" viewBox="0 0 295 294"><ellipse fill="url(#SVGVG45wdIa)" class="h6631mvpm"/><path class="ek6lthb7o"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 147.2 147.2; 45 147.2 147.2"/></path></symbol></defs><path class="h-8cbyq4l"/><use width="295" height="294" href="#SVGBW98RcUv" transform="translate(108.63 70.91)"/>`,
		"fallback": "meteocons:time-late-afternoon-fill",
	});
}

export default Component;
