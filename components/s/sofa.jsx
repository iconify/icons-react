import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t16ny9ola.css';
import '../../css/f/fn-fcv_xe.css';
import '../../css/b/bfr7juptc.css';
import '../../css/v/vb2p5dizq.css';
import '../../css/n/nzuoa76rj.css';
import '../../css/w/w668tubko.css';
import '../../css/g/gu8elbbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t16ny9ola wm-k"/><path class="fn-fcv_xe wm-deco"/><path class="bfr7juptc wm-k"/><path class="vb2p5dizq wm-k"/><path class="nzuoa76rj wm-shadow"/><path class="w668tubko wm-shine"/><path class="gu8elbbth wm-shine"/></g>`,
		"fallback": "withicons-valentine:sofa",
	});
}

export default Component;
