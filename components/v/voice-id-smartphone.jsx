import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1rsaph5t.css';
import '../../css/r/rm932gbex.css';
import '../../css/r/rzpynubch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q1rsaph5t"/><path class="rm932gbex"/><path clip-rule="evenodd" class="rzpynubch"/></g>`,
		"fallback": "streamline-freehand-color:voice-id-smartphone",
	});
}

export default Component;
