import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu2huubnl.css';
import '../../css/k/kqfhl858c.css';
import '../../css/f/fmpis1pkr.css';
import '../../css/e/edo8e-btp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qu2huubnl"/><path class="kqfhl858c"/><path class="fmpis1pkr"/><path class="edo8e-btp"/></g>`,
		"fallback": "streamline-color:receipt",
	});
}

export default Component;
