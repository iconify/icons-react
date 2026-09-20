import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/njo2e-y0o.css';
import '../../css/t/tjvuacchn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="njo2e-y0o"/><path class="tjvuacchn"/></g>`,
		"fallback": "keyline-icons:question-fill",
	});
}

export default Component;
