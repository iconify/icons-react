import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqj0bns5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqj0bns5t"/>`,
		"fallback": "game-icons:schrodingers-cat-alive",
	});
}

export default Component;
