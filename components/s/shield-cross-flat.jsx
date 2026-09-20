import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c9iw7podw.css';
import '../../css/y/yrbrs3v7q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c9iw7podw"/><path class="yrbrs3v7q"/></g>`,
		"fallback": "streamline-color:shield-cross-flat",
	});
}

export default Component;
