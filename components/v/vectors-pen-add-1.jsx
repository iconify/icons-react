import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g3v-b8pcw.css';
import '../../css/y/y4cyozbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g3v-b8pcw"/><path class="y4cyozbjc"/></g>`,
		"fallback": "streamline-freehand-color:vectors-pen-add-1",
	});
}

export default Component;
