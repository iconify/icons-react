import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/at_81ebpk.css';
import '../../css/t/tf_8-xb1g.css';
import '../../css/q/qxli02nev.css';
import '../../css/e/ex_z2zb_b.css';
import '../../css/d/d-orjcc8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="at_81ebpk"/><path class="tf_8-xb1g"/><path class="qxli02nev"/><path class="ex_z2zb_b"/><path class="d-orjcc8m"/></g>`,
		"fallback": "solar:share-linear",
	});
}

export default Component;
