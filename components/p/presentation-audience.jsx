import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b8us44b0d.css';
import '../../css/a/aefixycps.css';
import '../../css/l/l2a232o4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b8us44b0d"/><path class="aefixycps"/><path class="l2a232o4q"/></g>`,
		"fallback": "streamline-freehand:presentation-audience",
	});
}

export default Component;
