import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cp5va7soh.css';
import '../../css/y/y72ut8b7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cp5va7soh"/><path class="y72ut8b7x"/></g>`,
		"fallback": "healthicons:stop-outline",
	});
}

export default Component;
