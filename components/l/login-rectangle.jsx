import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umm83sb3y.css';
import '../../css/g/gi80co1oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="umm83sb3y"/><path class="gi80co1oi"/></g>`,
		"fallback": "streamline-freehand-color:login-rectangle",
	});
}

export default Component;
