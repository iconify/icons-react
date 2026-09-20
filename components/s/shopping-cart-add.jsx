import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d0fm-7m6y.css';
import '../../css/j/j60tq1rjw.css';
import '../../css/z/zksv7j5ng.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d0fm-7m6y"/><path class="j60tq1rjw"/><path class="zksv7j5ng"/></g>`,
		"fallback": "streamline-plump-color:shopping-cart-add",
	});
}

export default Component;
