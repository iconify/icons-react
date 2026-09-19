import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/ej1sbacnx.css';
import '../../css/g/g_xyfxb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ej1sbacnx"/><path class="g_xyfxb_x"/></g>`,
		"fallback": "bitcoin-icons:receipt-outline",
	});
}

export default Component;
