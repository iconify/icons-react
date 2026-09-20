import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/loy9_9uel.css';
import '../../css/g/gtk5zcbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="loy9_9uel"/><path class="gtk5zcbhf"/></g>`,
		"fallback": "streamline-freehand-color:power-button",
	});
}

export default Component;
