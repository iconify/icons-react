import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r6y61-bcg.css';
import '../../css/f/fn5c4eb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r6y61-bcg"/><path class="fn5c4eb3z"/></g>`,
		"fallback": "streamline-freehand:shopping-bag-biodegradable-1",
	});
}

export default Component;
