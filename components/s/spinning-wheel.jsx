import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe2ker-yy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe2ker-yy"/>`,
		"fallback": "game-icons:spinning-wheel",
	});
}

export default Component;
