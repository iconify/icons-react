import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qh1jqibmn.css';
import '../../css/y/ytmak96_o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qh1jqibmn"/><path class="ytmak96_o"/></g>`,
		"fallback": "streamline-flex-color:logout-1-flat",
	});
}

export default Component;
