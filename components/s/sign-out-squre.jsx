import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed-4tfb8w.css';
import '../../css/w/wsck6kzgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ed-4tfb8w"/><path class="wsck6kzgj"/></g>`,
		"fallback": "lets-icons:sign-out-squre",
	});
}

export default Component;
