import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8q-0mfjm.css';
import '../../css/g/gutai34xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8q-0mfjm"/><path class="gutai34xm"/></g>`,
		"fallback": "coolicons:pencil-line-duotone-round",
	});
}

export default Component;
