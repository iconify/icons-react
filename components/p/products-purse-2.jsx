import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yrzokps8z.css';
import '../../css/g/g27cq0bky.css';
import '../../css/k/k2n8rtbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yrzokps8z"/><path class="g27cq0bky"/><path class="k2n8rtbhj"/></g>`,
		"fallback": "streamline-freehand:products-purse-2",
	});
}

export default Component;
