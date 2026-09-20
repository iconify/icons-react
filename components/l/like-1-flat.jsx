import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkyfw3bav.css';
import '../../css/u/u1kpltbly.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zkyfw3bav"/><path class="u1kpltbly"/></g>`,
		"fallback": "streamline-color:like-1-flat",
	});
}

export default Component;
