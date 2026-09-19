import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vu7wtwbow.css';
import '../../css/q/qdyhayb_x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vu7wtwbow"/><path class="qdyhayb_x"/></g>`,
		"fallback": "pepicons:letter",
	});
}

export default Component;
