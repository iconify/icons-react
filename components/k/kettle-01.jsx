import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/ss97y7h8n.css';
import '../../css/q/q2kel5-0b.css';
import '../../css/f/f65fcelrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ss97y7h8n"/><path class="q2kel5-0b"/><path class="f65fcelrc"/></g>`,
		"fallback": "hugeicons:kettle-01",
	});
}

export default Component;
