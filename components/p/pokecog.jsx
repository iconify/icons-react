import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-1u2acsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-1u2acsp"/>`,
		"fallback": "game-icons:pokecog",
	});
}

export default Component;
