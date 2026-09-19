import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xklh-8bqj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xklh-8bqj"/>`,
		"fallback": "game-icons:lightning-branches",
	});
}

export default Component;
