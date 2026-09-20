import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tke-0za-g.css';
import '../../css/n/ndk6zfbbq.css';
import '../../css/t/tiuqf-byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tke-0za-g"/><path class="ndk6zfbbq"/><path class="tiuqf-byk"/></g>`,
		"fallback": "solar:slider-horizontal-line-duotone",
	});
}

export default Component;
