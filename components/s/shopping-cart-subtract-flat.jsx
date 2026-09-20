import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qufl3u74v.css';
import '../../css/q/qfs9nzb4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qufl3u74v"/><path class="qfs9nzb4n"/></g>`,
		"fallback": "streamline-color:shopping-cart-subtract-flat",
	});
}

export default Component;
