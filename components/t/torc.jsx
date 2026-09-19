import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy5cukbng.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy5cukbng"/>`,
		"fallback": "game-icons:torc",
	});
}

export default Component;
