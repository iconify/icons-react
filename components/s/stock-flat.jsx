import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p-47lhdfr.css';
import '../../css/w/wufrw4bea.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p-47lhdfr"/><path class="wufrw4bea"/></g>`,
		"fallback": "streamline-color:stock-flat",
	});
}

export default Component;
