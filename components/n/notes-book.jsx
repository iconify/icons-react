import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mhmvfdb8m.css';
import '../../css/j/jvjre7mbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mhmvfdb8m"/><path class="jvjre7mbj"/></g>`,
		"fallback": "streamline-freehand-color:notes-book",
	});
}

export default Component;
