import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4me6eb9h.css';
import '../../css/y/y_9la8ijd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4me6eb9h"/><path class="y_9la8ijd"/></g>`,
		"fallback": "iconamoon:profile-circle",
	});
}

export default Component;
