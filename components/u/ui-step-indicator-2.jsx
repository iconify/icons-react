import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wahs48v3a.css';
import '../../css/j/jtu742b3e.css';
import '../../css/f/f1z770bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wahs48v3a"/><path class="jtu742b3e"/><path class="f1z770bbh"/></g>`,
		"fallback": "streamline-freehand-color:ui-step-indicator-2",
	});
}

export default Component;
