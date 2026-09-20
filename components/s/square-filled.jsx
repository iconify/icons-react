import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tx40tkuur.css';
import '../../css/l/l6m-mc58d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tx40tkuur"/><path class="l6m-mc58d"/></g>`,
		"fallback": "pepicons-print:square-filled",
	});
}

export default Component;
