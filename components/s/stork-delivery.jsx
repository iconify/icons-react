import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsj4hypri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsj4hypri"/>`,
		"fallback": "game-icons:stork-delivery",
	});
}

export default Component;
