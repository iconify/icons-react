import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqs_ax1-h.css';
import '../../css/s/s0yhhzsut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tqs_ax1-h"/><path class="s0yhhzsut"/></g>`,
		"fallback": "andrsrxn:screen-share-filled",
	});
}

export default Component;
