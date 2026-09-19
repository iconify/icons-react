import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4zno5b8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4zno5b8y"/>`,
		"fallback": "game-icons:medusa-head",
	});
}

export default Component;
