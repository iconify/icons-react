import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w4x1ws01r.css';
import '../../css/z/zi9-pkbwe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w4x1ws01r"/><path class="zi9-pkbwe"/></g>`,
		"fallback": "streamline-color:warning-triangle-flat",
	});
}

export default Component;
