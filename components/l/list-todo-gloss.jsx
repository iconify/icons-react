import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/efrfy9bzt.css';
import '../../css/a/awug18b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="efrfy9bzt wm-k"/><path class="awug18b1i wm-a"/></g>`,
		"fallback": "withicons:list-todo-gloss",
	});
}

export default Component;
