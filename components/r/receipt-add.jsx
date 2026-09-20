import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu2huubnl.css';
import '../../css/k/kqfhl858c.css';
import '../../css/p/p-688m4fk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qu2huubnl"/><path class="kqfhl858c"/><path class="p-688m4fk"/></g>`,
		"fallback": "streamline-color:receipt-add",
	});
}

export default Component;
