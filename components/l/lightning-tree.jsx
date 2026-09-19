import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8sj8sifg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8sj8sifg"/>`,
		"fallback": "game-icons:lightning-tree",
	});
}

export default Component;
