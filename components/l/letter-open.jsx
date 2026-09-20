import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cjawkmjym.css';
import '../../css/n/nw9z_9bah.css';
import '../../css/d/d801rwncm.css';
import '../../css/w/w8wji3bbf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cjawkmjym"/><path class="nw9z_9bah"/><path class="d801rwncm"/><path class="w8wji3bbf"/></g>`,
		"fallback": "pepicons-print:letter-open",
	});
}

export default Component;
