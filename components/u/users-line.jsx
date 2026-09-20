import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n7a4osb1i.css';
import '../../css/h/h47p_644n.css';
import '../../css/q/q4f9vsb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="n7a4osb1i"/><path class="h47p_644n"/><path class="q4f9vsb6j"/></g>`,
		"fallback": "majesticons:users-line",
	});
}

export default Component;
