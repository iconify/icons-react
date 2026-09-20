import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f-qiyobem.css';
import '../../css/z/zw18cqbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f-qiyobem"/><path class="zw18cqbvw"/></g>`,
		"fallback": "lets-icons:pie-chart-fill",
	});
}

export default Component;
