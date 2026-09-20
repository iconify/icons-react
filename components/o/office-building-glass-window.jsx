import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jnyaapbpz.css';
import '../../css/h/h3otatgsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jnyaapbpz"/><path class="h3otatgsk"/></g>`,
		"fallback": "streamline-freehand-color:office-building-glass-window",
	});
}

export default Component;
