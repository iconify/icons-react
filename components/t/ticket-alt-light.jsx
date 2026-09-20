import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kwempktlv.css';
import '../../css/i/i334jtili.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="kwempktlv"/><path class="i334jtili"/></g>`,
		"fallback": "lets-icons:ticket-alt-light",
	});
}

export default Component;
