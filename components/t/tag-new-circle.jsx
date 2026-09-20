import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w6w7jbc2y.css';
import '../../css/f/ffr6v-b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w6w7jbc2y"/><path class="ffr6v-b9p"/></g>`,
		"fallback": "streamline-freehand:tag-new-circle",
	});
}

export default Component;
