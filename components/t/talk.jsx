import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs9g5f4wp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs9g5f4wp"/>`,
		"fallback": "game-icons:talk",
	});
}

export default Component;
