import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sa6lq1bmp.css';
import '../../css/u/uikv59vvp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sa6lq1bmp"/><path class="uikv59vvp"/></g>`,
		"fallback": "pepicons-print:line-slant-down",
	});
}

export default Component;
