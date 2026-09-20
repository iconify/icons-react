import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu2wlfbis.css';
import '../../css/e/ehl_s9z8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eu2wlfbis"/><path class="ehl_s9z8m"/></g>`,
		"fallback": "solar:transmission-bold",
	});
}

export default Component;
