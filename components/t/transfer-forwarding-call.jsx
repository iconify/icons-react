import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4nsqv99v.css';
import '../../css/e/ek4346b-a.css';
import '../../css/j/j16jkebzn.css';
import '../../css/t/t65574bsi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4nsqv99v"/><path class="ek4346b-a"/><path class="j16jkebzn"/><path class="t65574bsi"/></g>`,
		"fallback": "streamline-flex-color:transfer-forwarding-call",
	});
}

export default Component;
