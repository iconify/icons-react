import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqoxu7b0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqoxu7b0z"/>`,
		"fallback": "game-icons:plum",
	});
}

export default Component;
