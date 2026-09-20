import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jtds20b8t.css';
import '../../css/z/z83q5kbbn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jtds20b8t"/><path class="z83q5kbbn"/></g>`,
		"fallback": "streamline-flex-color:pen-1-flat",
	});
}

export default Component;
