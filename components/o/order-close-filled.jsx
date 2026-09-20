import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4sc0yb1a.css';
import '../../css/q/qcjn5ubrr.css';
import '../../css/t/tzoj6_rud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4sc0yb1a"/><path class="qcjn5ubrr"/><path clip-rule="evenodd" class="tzoj6_rud"/>`,
		"fallback": "lsicon:order-close-filled",
	});
}

export default Component;
