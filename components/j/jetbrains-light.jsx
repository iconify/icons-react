import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/v/vqe6txv6a.css';
import '../../css/y/yxzgilblw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGwtcoKmtL" x1="8.5" x2="499.3" y1="503.5" y2="12.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".996" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGwtcoKmtL)" class="vqe6txv6a"/><path class="yxzgilblw"/>`,
		"fallback": "selfhst:jetbrains-light",
	});
}

export default Component;
