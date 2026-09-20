import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o22zcjwus.css';
import '../../css/u/u4qzzebdn.css';
import '../../css/c/cjagq9luu.css';
import '../../css/c/c2kqpacmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o22zcjwus"/><path class="u4qzzebdn"/><path class="cjagq9luu"/><path class="c2kqpacmx"/></g>`,
		"fallback": "streamline-freehand-color:resize-shrink-1",
	});
}

export default Component;
