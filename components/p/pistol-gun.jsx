import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-i5cov4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-i5cov4l"/>`,
		"fallback": "game-icons:pistol-gun",
	});
}

export default Component;
