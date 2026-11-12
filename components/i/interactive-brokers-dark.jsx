import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sll_zg-uo.css';
import '../../css/c/ccqymhpos.css';
import '../../css/l/l6xvejonm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGygEO3diJ" x1="351.3" x2="124.8" y1="387.2" y2="387.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="sll_zg-uo"/><stop offset="1"/></linearGradient><path fill="url(#SVGygEO3diJ)" class="ccqymhpos"/><path class="l6xvejonm"/>`,
		"fallback": "selfhst:interactive-brokers-dark",
	});
}

export default Component;
