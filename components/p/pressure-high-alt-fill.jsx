import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gka0e7bkk.css';
import '../../css/j/jwwb_xbwf.css';
import '../../css/q/qp75v-b6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGFiNE6cPW" x1="209" x2="303" y1="174.5" y2="337.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="gka0e7bkk"/><stop offset=".5" class="gka0e7bkk"/><stop offset="1" class="jwwb_xbwf"/></linearGradient></defs><path fill="url(#SVGFiNE6cPW)" class="qp75v-b6w"/>`,
		"fallback": "meteocons:pressure-high-alt-fill",
	});
}

export default Component;
