import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y_ys2fo5h.css';
import '../../css/v/vb19ktj5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y_ys2fo5h"/><path class="vb19ktj5c"/></g>`,
		"fallback": "streamline-freehand-color:meeting-co-working-2",
	});
}

export default Component;
