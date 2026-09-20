import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/b/bluheubuq.css';
import '../../css/k/kuv1vkb9v.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 2)" class="jtowsomii"><path class="bluheubuq"/><circle class="kuv1vkb9v"/></g>`,
		"fallback": "system-uicons:notification",
	});
}

export default Component;
