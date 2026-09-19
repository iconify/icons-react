import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihikl0b1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihikl0b1p"/>`,
		"fallback": "game-icons:ubisoft-sun",
	});
}

export default Component;
