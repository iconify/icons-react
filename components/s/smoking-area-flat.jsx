import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a5unqgb-i.css';
import '../../css/z/zjv64mbiy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a5unqgb-i"/><path class="zjv64mbiy"/></g>`,
		"fallback": "streamline-flex-color:smoking-area-flat",
	});
}

export default Component;
