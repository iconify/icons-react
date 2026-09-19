import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbryfi_9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbryfi_9q"/>`,
		"fallback": "game-icons:pencil",
	});
}

export default Component;
