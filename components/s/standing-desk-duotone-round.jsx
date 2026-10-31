import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9wy0gb0l.css';
import '../../css/j/j6rrjzbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m9wy0gb0l"/><path class="j6rrjzbld"/></g>`,
		"fallback": "coolicons:standing-desk-duotone-round",
	});
}

export default Component;
