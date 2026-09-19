import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ge-usbc4v.css';
import '../../css/h/h18c3wshh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ge-usbc4v"/><path class="h18c3wshh"/></g>`,
		"fallback": "foundation:social-500px",
	});
}

export default Component;
