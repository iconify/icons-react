import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvj-yxi8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvj-yxi8a"/>`,
		"fallback": "game-icons:miracle-medecine",
	});
}

export default Component;
