import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j779vsc8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j779vsc8h"/>`,
		"fallback": "fa-solid:sink",
	});
}

export default Component;
