import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/re4_cpv8t.css';
import '../../css/d/dpw-71b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="re4_cpv8t"/><path class="dpw-71b2w"/></g>`,
		"fallback": "streamline-freehand-color:safety-911-call",
	});
}

export default Component;
