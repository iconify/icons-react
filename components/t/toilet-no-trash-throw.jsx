import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qx_t0yb9b.css';
import '../../css/y/y4y4kpb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qx_t0yb9b"/><path class="y4y4kpb5z"/></g>`,
		"fallback": "streamline-freehand-color:toilet-no-trash-throw",
	});
}

export default Component;
