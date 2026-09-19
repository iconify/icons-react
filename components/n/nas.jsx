import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fg7247g_z.css';
import '../../css/d/duude7cgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="fg7247g_z"/><path class="duude7cgz"/></g>`,
		"fallback": "cryptocurrency-color:nas",
	});
}

export default Component;
