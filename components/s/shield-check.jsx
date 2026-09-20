import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/znkfy2bwg.css';
import '../../css/w/wurffhb1g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="znkfy2bwg"/><path class="wurffhb1g"/></g>`,
		"fallback": "pepicons-pencil:shield-check",
	});
}

export default Component;
