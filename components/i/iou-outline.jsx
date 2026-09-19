import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/haqszuawp.css';
import '../../css/n/n289_rbfx.css';
import '../../css/m/mhcrz7bok.css';
import '../../css/i/i6ykxkjyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="haqszuawp"/><rect class="n289_rbfx"/><path class="mhcrz7bok"/><path class="i6ykxkjyc"/></g>`,
		"fallback": "bitcoin-icons:iou-outline",
	});
}

export default Component;
