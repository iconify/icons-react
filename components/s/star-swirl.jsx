import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd-ed3c-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd-ed3c-m"/>`,
		"fallback": "game-icons:star-swirl",
	});
}

export default Component;
