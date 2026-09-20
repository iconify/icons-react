import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/er4f055sx.css';
import '../../css/c/c29p0ouse.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="er4f055sx"/><path class="c29p0ouse"/></g>`,
		"fallback": "streamline-plump-color:mouse-wireless-flat",
	});
}

export default Component;
