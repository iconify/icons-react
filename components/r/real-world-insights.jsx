import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/p/py_4k92_q.css';
import '../../css/q/qa3awcbml.css';
import '../../css/g/g32u12b2q.css';
import '../../css/m/m6a-39ccf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(-2.4 -2)" class="bi12bsetm"><path class="t_ev7s-sv"/><circle class="py_4k92_q"/><circle class="qa3awcbml"/><circle class="g32u12b2q"/><path class="m6a-39ccf"/></g>`,
		"fallback": "gcp:real-world-insights",
	});
}

export default Component;
