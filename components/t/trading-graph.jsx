import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/thqcempkk.css';
import '../../css/f/ff05q1b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="thqcempkk"/><path class="ff05q1b1f"/></g>`,
		"fallback": "streamline-freehand-color:trading-graph",
	});
}

export default Component;
