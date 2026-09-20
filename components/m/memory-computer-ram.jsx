import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a6s2kyb6i.css';
import '../../css/u/uxar95xsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a6s2kyb6i"/><path class="uxar95xsy"/></g>`,
		"fallback": "streamline-freehand-color:memory-computer-ram",
	});
}

export default Component;
