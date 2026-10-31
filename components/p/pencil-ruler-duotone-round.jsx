import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8q-0mfjm.css';
import '../../css/d/d7u-8bigl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8q-0mfjm"/><path class="d7u-8bigl"/></g>`,
		"fallback": "coolicons:pencil-ruler-duotone-round",
	});
}

export default Component;
