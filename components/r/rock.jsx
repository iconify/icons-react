import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkt4_9b7d.css';
import '../../css/k/ks_eg-18u.css';
import '../../css/e/eugxcfb5p.css';
import '../../css/j/j7wzwgo4v.css';
import '../../css/q/qdo1jkczb.css';
import '../../css/t/tmjvaubwy.css';
import '../../css/v/v3-0dtlue.css';
import '../../css/c/cxfaq5_6s.css';
import '../../css/q/q24znilea.css';
import '../../css/h/hwkfdb_7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGePf9kceA" cx="79" cy="90.4" r="134.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="wkt4_9b7d"/><stop offset=".85" class="ks_eg-18u"/><stop offset="1" class="ks_eg-18u"/></radialGradient></defs><g transform="matrix(2.7 0 0 2.7 -15.96 -54.26)"><path class="eugxcfb5p"/><path fill="url(#SVGePf9kceA)" class="j7wzwgo4v"/><path class="qdo1jkczb"/><path class="tmjvaubwy"/><ellipse class="v3-0dtlue"/><ellipse class="cxfaq5_6s"/><ellipse class="q24znilea"/><path class="hwkfdb_7s"/></g>`,
		"fallback": "xero-emoji:rock",
	});
}

export default Component;
