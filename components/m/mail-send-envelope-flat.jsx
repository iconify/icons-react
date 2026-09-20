import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijq_n3b5x.css';
import '../../css/s/sc-bp--qn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijq_n3b5x"/><path clip-rule="evenodd" class="sc-bp--qn"/></g>`,
		"fallback": "streamline-flex-color:mail-send-envelope-flat",
	});
}

export default Component;
