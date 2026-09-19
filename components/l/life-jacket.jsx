import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uezj0bb4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uezj0bb4p"/>`,
		"fallback": "game-icons:life-jacket",
	});
}

export default Component;
