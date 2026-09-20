import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxymrbctt.css';
import '../../css/d/d-svt8bha.css';
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
		"content": `<path class="fxymrbctt"/><path class="d-svt8bha"/><circle class="k79q3xboj"/><circle class="r5d2n_xgw"/>`,
		"fallback": "ooui:user-talk-rtl",
	});
}

export default Component;
