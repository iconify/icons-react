import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q5yr6y7nk.css';
import '../../css/k/kp6axvbpv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q5yr6y7nk"/><path class="kp6axvbpv"/></g>`,
		"fallback": "streamline-flex-color:reduced-inequalities-flat",
	});
}

export default Component;
