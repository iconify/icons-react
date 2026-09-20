import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/f/fub8u0bsr.css';
import '../../css/m/mvkasiemb.css';
import '../../css/t/tonplxqkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="fub8u0bsr"/><path class="mvkasiemb"/><path class="tonplxqkt"/></g>`,
		"fallback": "solar:list-down-minimalistic-line-duotone",
	});
}

export default Component;
