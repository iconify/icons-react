import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi5jrjbfv.css';
import '../../css/u/utf10qbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gi5jrjbfv"/><path class="utf10qbkf"/></g>`,
		"fallback": "streamline-sharp-color:satellite-dish-flat",
	});
}

export default Component;
