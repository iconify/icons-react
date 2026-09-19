import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9z9uobwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9z9uobwm"/>`,
		"fallback": "game-icons:space-shuttle",
	});
}

export default Component;
