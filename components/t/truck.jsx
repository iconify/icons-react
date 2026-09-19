import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvn3j3bbp.css';
import '../../css/m/mry2x-b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tvn3j3bbp"/><path class="mry2x-b2r"/></g>`,
		"fallback": "heroicons-outline:truck",
	});
}

export default Component;
