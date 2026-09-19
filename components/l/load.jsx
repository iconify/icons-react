import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5ky9xbez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5ky9xbez"/>`,
		"fallback": "game-icons:load",
	});
}

export default Component;
