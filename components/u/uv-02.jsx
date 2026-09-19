import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4x0dddey.css';
import '../../css/l/l5c41ebky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4x0dddey"/><path class="l5c41ebky"/></g>`,
		"fallback": "hugeicons:uv-02",
	});
}

export default Component;
