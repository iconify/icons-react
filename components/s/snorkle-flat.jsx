import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z5-0v2fqr.css';
import '../../css/v/v8ghz0ooi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z5-0v2fqr"/><path class="v8ghz0ooi"/></g>`,
		"fallback": "streamline-color:snorkle-flat",
	});
}

export default Component;
