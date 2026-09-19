import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clzusyb2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clzusyb2d"/>`,
		"fallback": "game-icons:noodle-ball",
	});
}

export default Component;
