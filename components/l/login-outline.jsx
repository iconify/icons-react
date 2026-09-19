import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnpa17iln.css';
import '../../css/p/p2z3ecb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="login-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hnpa17iln"/><path class="p2z3ecb-h"/></g></g>`,
		"fallback": "cuida:login-outline",
	});
}

export default Component;
