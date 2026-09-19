import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw0_165kj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw0_165kj"/>`,
		"fallback": "fa-solid:poop",
	});
}

export default Component;
