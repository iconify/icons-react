import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5jevfu_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5jevfu_k"/>`,
		"fallback": "game-icons:lion",
	});
}

export default Component;
