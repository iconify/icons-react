import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iugmdfb0z.css';
import '../../css/g/gbvdxcq5n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iugmdfb0z"/><path class="gbvdxcq5n"/></g>`,
		"fallback": "streamline-flex-color:shopping-basket-2-flat",
	});
}

export default Component;
