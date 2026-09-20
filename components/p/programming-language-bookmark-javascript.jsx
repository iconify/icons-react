import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sb8lcabgc.css';
import '../../css/c/c-hho8xra.css';
import '../../css/o/ow1qj4p-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sb8lcabgc"/><path class="c-hho8xra"/><path class="ow1qj4p-m"/></g>`,
		"fallback": "streamline-freehand-color:programming-language-bookmark-javascript",
	});
}

export default Component;
