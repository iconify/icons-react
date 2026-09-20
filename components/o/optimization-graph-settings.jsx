import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p907x47-t.css';
import '../../css/n/n3xytbcmz.css';
import '../../css/b/bzh-1hb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p907x47-t"/><path class="n3xytbcmz"/><path class="bzh-1hb8q"/></g>`,
		"fallback": "streamline-freehand-color:optimization-graph-settings",
	});
}

export default Component;
