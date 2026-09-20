import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e7-fhk4_d.css';
import '../../css/l/lwpyjib8f.css';
import '../../css/u/up2lhibkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e7-fhk4_d"/><path class="lwpyjib8f"/><path class="up2lhibkr"/></g>`,
		"fallback": "streamline-freehand-color:job-seach-man",
	});
}

export default Component;
