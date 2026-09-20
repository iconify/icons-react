import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpfy7_c3l.css';
import '../../css/m/mn9rld-1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wpfy7_c3l"/><path clip-rule="evenodd" class="mn9rld-1i"/></g>`,
		"fallback": "majesticons:scale-light",
	});
}

export default Component;
