import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urkf6-1ve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urkf6-1ve"/>`,
		"fallback": "game-icons:lightning-bow",
	});
}

export default Component;
