import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-uzgj8_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-uzgj8_k"/>`,
		"fallback": "game-icons:linked-rings",
	});
}

export default Component;
