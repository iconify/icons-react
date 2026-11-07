import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bt5przbar.css';
import '../../css/q/qgaogacwb.css';
import '../../css/f/f9fnrfbtc.css';
import '../../css/i/i6nrt8nnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bt5przbar"/><path class="qgaogacwb"/><path class="f9fnrfbtc"/><path class="i6nrt8nnu"/></g>`,
		"fallback": "solar:medal-ribbons-star-line-duotone",
	});
}

export default Component;
