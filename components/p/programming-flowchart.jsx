import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/og3z7xb8z.css';
import '../../css/c/cklkn_buw.css';
import '../../css/h/hgrhhsb1a.css';
import '../../css/j/j_oh_7b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="og3z7xb8z"/><path clip-rule="evenodd" class="cklkn_buw"/><path class="hgrhhsb1a"/><path class="j_oh_7b3q"/></g>`,
		"fallback": "streamline-freehand-color:programming-flowchart",
	});
}

export default Component;
