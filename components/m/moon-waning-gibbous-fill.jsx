import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';
import '../../css/z/zsn627f2e.css';
import '../../css/r/r-3_6x3sx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGftBWedBO" x1="12993.6" x2="13126.8" y1="143.9" y2="374.7" gradientTransform="matrix(-1 0 0 1 13312.32 0)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient></defs><path class="zsn627f2e"/><path fill="url(#SVGftBWedBO)" class="r-3_6x3sx"/>`,
		"fallback": "meteocons:moon-waning-gibbous-fill",
	});
}

export default Component;
