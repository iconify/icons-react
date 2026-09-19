import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6mk1rb9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6mk1rb9u"/>`,
		"fallback": "game-icons:stack",
	});
}

export default Component;
