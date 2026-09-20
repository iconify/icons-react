import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';
import '../../css/z/zsn627f2e.css';
import '../../css/v/v6iu1jb3a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG6rgJYzoN" x1="11988.7" x2="12107.6" y1="166.7" y2="372.6" gradientTransform="matrix(-1 0 0 1 12286.71 0)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient></defs><path class="zsn627f2e"/><path fill="url(#SVG6rgJYzoN)" class="v6iu1jb3a"/>`,
		"fallback": "meteocons:moon-waning-crescent-fill",
	});
}

export default Component;
