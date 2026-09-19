import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fka7ssbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="menu-outline"><path class="(Stroke) 38 Vector fka7ssbnm" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:menu-outline",
	});
}

export default Component;
