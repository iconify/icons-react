import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coaklgbba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coaklgbba"/>`,
		"fallback": "game-icons:tarot-01-the-magician",
	});
}

export default Component;
