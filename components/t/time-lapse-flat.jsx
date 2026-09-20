import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qnc1_id1g.css';
import '../../css/g/gewb6zvrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qnc1_id1g"/><path class="gewb6zvrx"/></g>`,
		"fallback": "streamline-sharp-color:time-lapse-flat",
	});
}

export default Component;
