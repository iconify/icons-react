import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jssoprxmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="star-outline"><path class="Vector jssoprxmo" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:star-outline",
	});
}

export default Component;
