import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h165r_jwh.css';
import '../../css/p/p783iebym.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><circle class="h165r_jwh"/><path class="p783iebym"/></g>`,
		"fallback": "fad:logo-reason",
	});
}

export default Component;
