import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj3wflbnq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj3wflbnq"/>`,
		"fallback": "game-icons:square",
	});
}

export default Component;
