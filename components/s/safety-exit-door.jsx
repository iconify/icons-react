import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ioyzf9b-l.css';
import '../../css/i/irxnizetc.css';
import '../../css/j/j1gloz0wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ioyzf9b-l"/><path class="irxnizetc"/><path class="j1gloz0wg"/></g>`,
		"fallback": "streamline-freehand:safety-exit-door",
	});
}

export default Component;
