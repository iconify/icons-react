import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko-4xac8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko-4xac8i"/>`,
		"fallback": "game-icons:life-in-the-balance",
	});
}

export default Component;
