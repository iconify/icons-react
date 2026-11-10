import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsj5jib7v.css';
import '../../css/f/fs8_v-6ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jsj5jib7v"/><path class="fs8_v-6ak"/></g>`,
		"fallback": "andrsrxn:share",
	});
}

export default Component;
