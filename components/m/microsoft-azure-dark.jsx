import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4jryvres.css';
import '../../css/r/rw5c_lizo.css';
import '../../css/y/yw8ns2ibw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4jryvres"/><linearGradient id="SVGzF0JrCLX" x1="395.3" x2="263.1" y1="89.1" y2="479.8" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="rw5c_lizo"/></linearGradient><path fill="url(#SVGzF0JrCLX)" class="yw8ns2ibw"/>`,
		"fallback": "selfhst:microsoft-azure-dark",
	});
}

export default Component;
