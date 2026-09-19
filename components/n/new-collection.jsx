import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h-i3pxekm.css';
import '../../css/a/azfc0wb0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h-i3pxekm"/><path class="azfc0wb0x"/></g>`,
		"fallback": "codicon:new-collection",
	});
}

export default Component;
