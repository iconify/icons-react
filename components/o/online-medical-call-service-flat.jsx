import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3_xy5b0o.css';
import '../../css/a/ad05g3j8o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z3_xy5b0o"/><path class="ad05g3j8o"/></g>`,
		"fallback": "streamline-color:online-medical-call-service-flat",
	});
}

export default Component;
