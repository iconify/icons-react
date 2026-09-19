import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioyihbcbz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioyihbcbz"/>`,
		"fallback": "game-icons:photo-camera",
	});
}

export default Component;
