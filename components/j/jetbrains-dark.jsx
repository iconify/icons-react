import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sll_zg-uo.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/v/vqe6txv6a.css';
import '../../css/e/e04f54bxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGZZVLeeuG" x1="8.509" x2="499.251" y1="503.491" y2="12.749" gradientUnits="userSpaceOnUse"><stop offset="0" class="sll_zg-uo"/><stop offset=".996" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGZZVLeeuG)" class="vqe6txv6a"/><path class="e04f54bxd"/>`,
		"fallback": "selfhst:jetbrains-dark",
	});
}

export default Component;
