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
		"content": `<linearGradient id="SVGF2LlJbLY" x1="2136.942" x2="2363.435" y1="125.81" y2="125.81" gradientTransform="rotate(180 1244.122 256.5)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGF2LlJbLY)" class="ccqymhpos"/><path class="u-67px-7k"/>`,
		"fallback": "selfhst:interactive-brokers-light",
	});
}

export default Component;
