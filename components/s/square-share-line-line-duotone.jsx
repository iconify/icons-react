import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i65inrg3o.css';
import '../../css/h/hrauyebmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i65inrg3o"/><path class="hrauyebmu"/></g>`,
		"fallback": "solar:square-share-line-line-duotone",
	});
}

export default Component;
