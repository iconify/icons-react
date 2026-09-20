import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tiwnvw5kd.css';
import '../../css/n/nwrovfber.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tiwnvw5kd"/><path class="nwrovfber"/></g>`,
		"fallback": "pepicons-pencil:ticket",
	});
}

export default Component;
