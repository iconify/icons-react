import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we2kroq9k.css';
import '../../css/q/qxtidqbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="we2kroq9k"/><path class="qxtidqbuv"/></g>`,
		"fallback": "streamline-freehand-color:smiley-cheeky",
	});
}

export default Component;
