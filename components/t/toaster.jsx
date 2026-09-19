import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0p0d2yta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0p0d2yta"/>`,
		"fallback": "game-icons:toaster",
	});
}

export default Component;
