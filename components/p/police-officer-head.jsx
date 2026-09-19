import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a39sszbkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a39sszbkj"/>`,
		"fallback": "game-icons:police-officer-head",
	});
}

export default Component;
