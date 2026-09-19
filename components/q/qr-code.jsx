import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qff1_2b0u.css';
import '../../css/r/rqt-30bru.css';
import '../../css/p/p40u8ubka.css';
import '../../css/v/vun-ecc2d.css';
import '../../css/t/t90mwlr7j.css';
import '../../css/b/bi5cq39rd.css';
import '../../css/k/kd48x_bds.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qff1_2b0u"/><path class="rqt-30bru"/><path clip-rule="evenodd" class="p40u8ubka"/><path clip-rule="evenodd" class="vun-ecc2d"/><path clip-rule="evenodd" class="t90mwlr7j"/><path clip-rule="evenodd" class="bi5cq39rd"/><path clip-rule="evenodd" class="kd48x_bds"/></g>`,
		"fallback": "pepicons:qr-code",
	});
}

export default Component;
