import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlm6jnb0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlm6jnb0o"/>`,
		"fallback": "game-icons:tick",
	});
}

export default Component;
