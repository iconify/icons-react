import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tq2xafack.css';
import '../../css/z/zwag25jea.css';
import '../../css/k/kcveuv76y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="trash-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tq2xafack"/><path class="zwag25jea"/><path class="kcveuv76y"/></g></g>`,
		"fallback": "cuida:trash-outline",
	});
}

export default Component;
