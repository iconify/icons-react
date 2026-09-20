import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oagl11z-l.css';
import '../../css/p/p963qub_h.css';
import '../../css/t/tk86eabev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oagl11z-l"/><path class="p963qub_h"/><path class="tk86eabev"/></g>`,
		"fallback": "streamline-freehand:office-shredder-1",
	});
}

export default Component;
