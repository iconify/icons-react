import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eyplzrmzi.css';
import '../../css/w/wheo40bob.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eyplzrmzi"/><path class="wheo40bob"/></g>`,
		"fallback": "streamline-color:tree-2-flat",
	});
}

export default Component;
