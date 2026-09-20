import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie0hfrbab.css';
import '../../css/c/cikwaf5ms.css';
import '../../css/j/jgamuhvba.css';
import '../../css/j/jo_1vrb9y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGLbZC8bqg" x1="256.094" x2="256.094" y1="371.132" y2="101.1" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ie0hfrbab"/><stop offset="1" class="cikwaf5ms"/></linearGradient><path fill="url(#SVGLbZC8bqg)" class="jgamuhvba"/><path class="jo_1vrb9y"/>`,
		"fallback": "selfhst:jsreport",
	});
}

export default Component;
