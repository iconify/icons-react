import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/einoa9bvk.css';
import '../../css/j/j0uqusbed.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="einoa9bvk"/><path class="j0uqusbed"/></g>`,
		"fallback": "streamline-color:praying-hand-flat",
	});
}

export default Component;
