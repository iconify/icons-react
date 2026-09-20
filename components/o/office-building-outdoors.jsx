import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kso8q1vbq.css';
import '../../css/g/g8hf58bbd.css';
import '../../css/a/au437wwib.css';
import '../../css/d/dlgxj6bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kso8q1vbq"/><path class="g8hf58bbd"/><path class="au437wwib"/><path class="dlgxj6bqr"/></g>`,
		"fallback": "streamline-freehand-color:office-building-outdoors",
	});
}

export default Component;
