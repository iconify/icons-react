import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8sf3_bdl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pb2dl2bib.css';
import '../../css/u/u9u5q7nrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8sf3_bdl secondary"/><g class="dt0cm9dhy primary"><path class="pb2dl2bib"/><path class="u9u5q7nrr"/></g>`,
		"fallback": "iconaut:piggy-bank-duo",
	});
}

export default Component;
