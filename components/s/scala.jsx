import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcjg1en7j.css';
import '../../css/e/eu6vb4bna.css';
import '../../css/l/la1q1sbut.css';
import '../../css/g/g3n0gxbkr.css';
import '../../css/v/vh7ulyb6s.css';
import '../../css/x/xg9bu-nvy.css';
import '../../css/i/i26728cyj.css';
import '../../css/v/voplncnxv.css';

const viewBox = {"width":256,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGIoYDikML" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" class="fcjg1en7j"/><stop offset="100%"/></linearGradient><linearGradient id="SVG8SIKbbQY" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" class="eu6vb4bna"/><stop offset="100%" class="la1q1sbut"/></linearGradient></defs><path fill="url(#SVGIoYDikML)" transform="matrix(1 0 0 -1 0 544)" class="g3n0gxbkr"/><path fill="url(#SVGIoYDikML)" transform="matrix(1 0 0 -1 0 288)" class="vh7ulyb6s"/><path fill="url(#SVG8SIKbbQY)" transform="matrix(1 0 0 -1 0 416)" class="xg9bu-nvy"/><path fill="url(#SVG8SIKbbQY)" transform="matrix(1 0 0 -1 0 160)" class="i26728cyj"/><path fill="url(#SVG8SIKbbQY)" transform="matrix(1 0 0 -1 0 672)" class="voplncnxv"/>`,
		"fallback": "thesvg-color:scala",
	});
}

export default Component;
