import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8_m0n41d.css';
import '../../css/h/h7o1n1z4d.css';
import '../../css/k/k79q3xboj.css';
import '../../css/r/r5d2n_xgw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8_m0n41d"/><path class="h7o1n1z4d"/><circle class="k79q3xboj"/><circle class="r5d2n_xgw"/>`,
		"fallback": "ooui:user-talk-ltr",
	});
}

export default Component;
