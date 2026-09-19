import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkxt-8bvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkxt-8bvb"/>`,
		"fallback": "game-icons:uruguay",
	});
}

export default Component;
