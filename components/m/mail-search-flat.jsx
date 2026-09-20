import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uy2bqp7ez.css';
import '../../css/i/igzl8zudh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uy2bqp7ez"/><path class="igzl8zudh"/></g>`,
		"fallback": "streamline-color:mail-search-flat",
	});
}

export default Component;
