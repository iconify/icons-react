import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpf1hvb6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpf1hvb6z"/>`,
		"fallback": "game-icons:sandwich",
	});
}

export default Component;
