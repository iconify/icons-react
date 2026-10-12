import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_nzjlbbz.css';
import '../../css/a/ava_3ubkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_nzjlbbz"/><path class="ava_3ubkc"/></g>`,
		"fallback": "andrsrxn:pin-filled",
	});
}

export default Component;
