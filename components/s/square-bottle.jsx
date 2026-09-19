import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoksw0bal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoksw0bal"/>`,
		"fallback": "game-icons:square-bottle",
	});
}

export default Component;
