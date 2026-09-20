import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esl9bhbxy.css';
import '../../css/k/kybmlx0mp.css';
import '../../css/k/krzr9662y.css';
import '../../css/e/elez8ybas.css';
import '../../css/u/uopf9pbqc.css';
import '../../css/z/zmtq5epxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGgnS9eeXM" x1="-695.575" x2="-519.089" y1="422.325" y2="327.556" gradientTransform="rotate(105.001 1263.195 108.381)scale(-2.8347 2.8347)" gradientUnits="userSpaceOnUse"><stop offset="0" class="esl9bhbxy"/><stop offset="1" class="kybmlx0mp"/></linearGradient><path fill="url(#SVGgnS9eeXM)" class="krzr9662y"/><linearGradient id="SVGOv5oHeyc" x1="-177.138" x2="-273.762" y1="885.284" y2="785.053" gradientTransform="matrix(2.8346 0 0 -2.8346 988.247 2514.891)" gradientUnits="userSpaceOnUse"><stop offset="0" class="elez8ybas"/><stop offset="1" class="uopf9pbqc"/></linearGradient><path fill="url(#SVGOv5oHeyc)" class="zmtq5epxi"/>`,
		"fallback": "selfhst:re-command",
	});
}

export default Component;
