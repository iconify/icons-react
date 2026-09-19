import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chfjskabm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chfjskabm"/>`,
		"fallback": "game-icons:kiwi-fruit",
	});
}

export default Component;
