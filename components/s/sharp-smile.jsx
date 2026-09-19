import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8gl1j29h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8gl1j29h"/>`,
		"fallback": "game-icons:sharp-smile",
	});
}

export default Component;
