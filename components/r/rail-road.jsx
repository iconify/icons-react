import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elw2dccwp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elw2dccwp"/>`,
		"fallback": "game-icons:rail-road",
	});
}

export default Component;
