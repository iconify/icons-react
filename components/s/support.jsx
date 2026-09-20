import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4qe06sko.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v4qe06sko"/><circle class="v4i2ew1ke"/></g>`,
		"fallback": "majesticons:support",
	});
}

export default Component;
