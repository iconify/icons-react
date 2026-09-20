import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osl41qbcx.css';
import '../../css/l/l8a4igbwd.css';
import '../../css/h/hu-f1ucmy.css';
import '../../css/c/cplzehb6u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osl41qbcx"/><path clip-rule="evenodd" class="l8a4igbwd"/><path class="hu-f1ucmy"/><path class="cplzehb6u"/></g>`,
		"fallback": "streamline-color:vr-headset-1",
	});
}

export default Component;
