import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwaj0vjwi.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/g/gz6_t9bsf.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lwaj0vjwi"/><path class="i5lvicvhn"/><path class="gz6_t9bsf"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:square-question-two-tone",
	});
}

export default Component;
