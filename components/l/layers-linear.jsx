import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tmqkr8aln.css';
import '../../css/c/chja7twbz.css';
import '../../css/e/e6ev9diml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tmqkr8aln"/><path class="chja7twbz"/><path class="e6ev9diml"/></g>`,
		"fallback": "solar:layers-linear",
	});
}

export default Component;
