import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d3iab9b0e.css';
import '../../css/z/zx4z7abfl.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d3iab9b0e"/><path class="zx4z7abfl"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "solar:translation-linear",
	});
}

export default Component;
