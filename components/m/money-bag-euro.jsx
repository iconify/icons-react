import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dy7msibcb.css';
import '../../css/t/t96dwwxjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dy7msibcb"/><path class="t96dwwxjg"/></g>`,
		"fallback": "streamline-freehand-color:money-bag-euro",
	});
}

export default Component;
