import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rfcvrbbgp.css';
import '../../css/v/vfqeg8bzc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rfcvrbbgp"/><path class="vfqeg8bzc"/></g>`,
		"fallback": "streamline-color:pathfinder-merge-flat",
	});
}

export default Component;
