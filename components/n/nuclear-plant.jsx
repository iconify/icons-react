import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j55yxkyiz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j55yxkyiz"/>`,
		"fallback": "game-icons:nuclear-plant",
	});
}

export default Component;
