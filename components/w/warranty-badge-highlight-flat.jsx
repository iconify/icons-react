import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l50fdmbjt.css';
import '../../css/l/lj7snebry.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l50fdmbjt"/><path class="lj7snebry"/></g>`,
		"fallback": "streamline-flex-color:warranty-badge-highlight-flat",
	});
}

export default Component;
