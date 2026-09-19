import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep8neybgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep8neybgk"/>`,
		"fallback": "game-icons:shears",
	});
}

export default Component;
