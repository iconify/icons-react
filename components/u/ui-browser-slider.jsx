import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/odox9sb5q.css';
import '../../css/t/teylq0bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="odox9sb5q"/><path class="teylq0bpd"/></g>`,
		"fallback": "streamline-freehand-color:ui-browser-slider",
	});
}

export default Component;
