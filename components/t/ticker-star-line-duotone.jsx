import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uvx_hvkwu.css';
import '../../css/c/ch_ymbvtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uvx_hvkwu"/><path class="ch_ymbvtl"/></g>`,
		"fallback": "solar:ticker-star-line-duotone",
	});
}

export default Component;
