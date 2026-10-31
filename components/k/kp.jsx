import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch5o8ji5y.css';
import '../../css/i/i6wt9mqpo.css';
import '../../css/t/tp_uxaccm.css';
import '../../css/g/g24zvbbah.css';
import '../../css/w/wgrxp0g-k.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ch5o8ji5y"/><path class="i6wt9mqpo"/><path class="tp_uxaccm"/><circle class="g24zvbbah"/><path class="wgrxp0g-k"/></g>`,
		"fallback": "cif:kp",
	});
}

export default Component;
