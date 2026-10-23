import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/htkqcrbiq.css';
import '../../css/f/f787t0b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="htkqcrbiq"/><path class="f787t0b_g"/></g>`,
		"fallback": "vadivam:user-round-plus",
	});
}

export default Component;
