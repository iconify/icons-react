import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/ccqymhpos.css';
import '../../css/u/u-67px-7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGMkf2ThMc" x1="351.3" x2="124.8" y1="387.2" y2="387.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGMkf2ThMc)" class="ccqymhpos"/><path class="u-67px-7k"/>`,
		"fallback": "selfhst:interactive-brokers-light",
	});
}

export default Component;
