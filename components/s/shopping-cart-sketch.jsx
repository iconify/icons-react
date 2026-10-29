import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnl2s3bta.css';
import '../../css/l/limikcbir.css';
import '../../css/y/yo47m6hva.css';
import '../../css/o/osc4domqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rnl2s3bta"/><path class="limikcbir wm-k"/><path class="wm-k yo47m6hva"/><path class="osc4domqp wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-sketch",
	});
}

export default Component;
