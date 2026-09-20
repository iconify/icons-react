import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf_qlo-zp.css';
import '../../css/v/v5ljivbwn.css';
import '../../css/e/e-vijbbnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGPqbGhekF" x1="187.9" x2="324.1" y1="138.1" y2="373.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="vf_qlo-zp"/><stop offset=".5" class="vf_qlo-zp"/><stop offset="1" class="v5ljivbwn"/></linearGradient></defs><path fill="url(#SVGPqbGhekF)" class="e-vijbbnd"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 256 256; 15 256 256; -15 256 256"/><animate attributeName="opacity" dur="6s" values="1; .75; 1; .75; 1; .75; 1"/></path>`,
		"fallback": "meteocons:star-fill",
	});
}

export default Component;
