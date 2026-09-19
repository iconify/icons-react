import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vzhzaf91h.css';
import '../../css/m/mj4u2ibud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vzhzaf91h"/><path class="mj4u2ibud"/></g>`,
		"fallback": "iconamoon:number-6-circle-light",
	});
}

export default Component;
