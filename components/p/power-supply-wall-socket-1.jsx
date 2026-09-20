import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vjym5t3yl.css';
import '../../css/b/bkcpweday.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vjym5t3yl"/><path class="bkcpweday"/></g>`,
		"fallback": "streamline-freehand-color:power-supply-wall-socket-1",
	});
}

export default Component;
