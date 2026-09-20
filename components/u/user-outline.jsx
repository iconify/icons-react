import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c5t-79n0j.css';
import '../../css/k/k_m9qhqyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c5t-79n0j"/><path class="k_m9qhqyy"/></g>`,
		"fallback": "solar:user-outline",
	});
}

export default Component;
