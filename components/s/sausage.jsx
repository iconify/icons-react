import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mspky1buw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mspky1buw"/>`,
		"fallback": "game-icons:sausage",
	});
}

export default Component;
