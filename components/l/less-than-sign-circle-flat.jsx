import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p4csrg05q.css';
import '../../css/j/j-d3813sx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p4csrg05q"/><path class="j-d3813sx"/></g>`,
		"fallback": "streamline-flex-color:less-than-sign-circle-flat",
	});
}

export default Component;
