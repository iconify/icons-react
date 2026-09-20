import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eq_b6pbqd.css';
import '../../css/x/x5gq8k_qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eq_b6pbqd"/><path class="x5gq8k_qf"/></g>`,
		"fallback": "lets-icons:search-fill",
	});
}

export default Component;
