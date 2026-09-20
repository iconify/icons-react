import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb2r0lzlb.css';
import '../../css/w/wnkunhbrw.css';
import '../../css/z/zsn627f2e.css';
import '../../css/u/uo_ggrbfh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGqQcvrcwv" x1="193.7" x2="325.5" y1="147.7" y2="376" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb2r0lzlb"/><stop offset=".5" class="cb2r0lzlb"/><stop offset="1" class="wnkunhbrw"/></linearGradient></defs><path class="zsn627f2e"/><path fill="url(#SVGqQcvrcwv)" class="uo_ggrbfh"/>`,
		"fallback": "meteocons:moon-first-quarter-fill",
	});
}

export default Component;
