import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j2dw6xn3p.css';
import '../../css/b/bt1j1cq8g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j2dw6xn3p"/><path class="bt1j1cq8g"/></g>`,
		"fallback": "streamline-color:volume-level-high-flat",
	});
}

export default Component;
