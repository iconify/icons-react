import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avi9u4biy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avi9u4biy"/>`,
		"fallback": "game-icons:warehouse",
	});
}

export default Component;
