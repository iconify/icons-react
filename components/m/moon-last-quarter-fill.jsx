import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';
import '../../css/z/zsn627f2e.css';
import '../../css/b/bk_p81bmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGHzag2jHm" x1="12482" x2="12613.8" y1="147.7" y2="376" gradientTransform="matrix(-1 0 0 1 12799.71 0)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient></defs><path class="zsn627f2e"/><path fill="url(#SVGHzag2jHm)" class="bk_p81bmy"/>`,
		"fallback": "meteocons:moon-last-quarter-fill",
	});
}

export default Component;
