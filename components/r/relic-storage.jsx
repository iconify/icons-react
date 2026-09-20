import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az80nsbwv.css';
import '../../css/o/or6_3ibjh.css';
import '../../css/s/susufzvox.css';
import '../../css/t/trbuzfbhh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGGu15LTmv" x1="-695.97" x2="-690.85" y1="794.17" y2="789.05" gradientTransform="matrix(100 0 0 -100 69597 79417)" gradientUnits="userSpaceOnUse"><stop offset="0" class="az80nsbwv"/><stop offset="1" class="or6_3ibjh"/></linearGradient><path fill="url(#SVGGu15LTmv)" class="susufzvox"/><path class="trbuzfbhh"/>`,
		"fallback": "selfhst:relic-storage",
	});
}

export default Component;
