import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oir8s09zf.css';
import '../../css/j/j9ljvnwcr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oir8s09zf"/><path class="j9ljvnwcr"/></g>`,
		"fallback": "streamline-flex-color:walker-flat",
	});
}

export default Component;
