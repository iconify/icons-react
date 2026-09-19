import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-33twob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny-33twob"/>`,
		"fallback": "game-icons:tennis-racket",
	});
}

export default Component;
