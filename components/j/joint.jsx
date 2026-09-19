import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjyo4ebzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjyo4ebzs"/>`,
		"fallback": "game-icons:joint",
	});
}

export default Component;
