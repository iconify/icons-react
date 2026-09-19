import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8j7x80k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8j7x80k"/>`,
		"fallback": "game-icons:snowing",
	});
}

export default Component;
