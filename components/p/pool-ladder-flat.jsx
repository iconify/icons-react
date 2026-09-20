import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dydj89brh.css';
import '../../css/j/jewckdb0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dydj89brh"/><path class="jewckdb0b"/></g>`,
		"fallback": "streamline-color:pool-ladder-flat",
	});
}

export default Component;
