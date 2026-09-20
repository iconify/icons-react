import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i_cyoebni.css';
import '../../css/v/v3gtaabgc.css';
import '../../css/f/ff_c_uz4c.css';
import '../../css/t/tr5lgkb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i_cyoebni"/><path class="v3gtaabgc"/><path class="ff_c_uz4c"/><path class="tr5lgkb8t"/></g>`,
		"fallback": "streamline-freehand-color:podcast-microphone-international-1",
	});
}

export default Component;
