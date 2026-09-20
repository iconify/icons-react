import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yu6-wxngk.css';
import '../../css/q/qd-gwtb2o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yu6-wxngk"/><path class="qd-gwtb2o"/></g>`,
		"fallback": "streamline-flex-color:search-category-flat",
	});
}

export default Component;
