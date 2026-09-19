import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysp0zgcvi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysp0zgcvi"/>`,
		"fallback": "game-icons:tree-swing",
	});
}

export default Component;
