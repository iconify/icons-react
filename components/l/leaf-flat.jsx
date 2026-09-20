import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j3ccchdtj.css';
import '../../css/h/h18ipbbgx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j3ccchdtj"/><path class="h18ipbbgx"/></g>`,
		"fallback": "streamline-color:leaf-flat",
	});
}

export default Component;
