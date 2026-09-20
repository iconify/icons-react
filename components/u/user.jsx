import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sgq0p14ld.css';
import '../../css/h/h3h_fhbod.css';
import '../../css/n/npf_28bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="sgq0p14ld"/><path class="h3h_fhbod"/><path class="npf_28bvp"/></g>`,
		"fallback": "majesticons:user",
	});
}

export default Component;
