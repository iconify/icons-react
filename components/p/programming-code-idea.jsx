import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rfoucwe1v.css';
import '../../css/c/cr_qpyb7b.css';
import '../../css/c/cddclgyug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rfoucwe1v"/><path class="cr_qpyb7b"/><path class="cddclgyug"/></g>`,
		"fallback": "streamline-freehand-color:programming-code-idea",
	});
}

export default Component;
