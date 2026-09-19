import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0x_k8bnp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0x_k8bnp"/>`,
		"fallback": "game-icons:rusty-sword",
	});
}

export default Component;
