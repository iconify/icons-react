import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2hm0dbvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2hm0dbvm"/>`,
		"fallback": "game-icons:klingon",
	});
}

export default Component;
