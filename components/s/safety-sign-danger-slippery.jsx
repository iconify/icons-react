import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sg7--kb0y.css';
import '../../css/u/u_0iwjbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sg7--kb0y"/><path class="u_0iwjbhp"/></g>`,
		"fallback": "streamline-freehand-color:safety-sign-danger-slippery",
	});
}

export default Component;
