import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ei_je2b_p.css';
import '../../css/t/tni6f7iwc.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ei_je2b_p"/><path class="tni6f7iwc"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:triangle-alert",
	});
}

export default Component;
