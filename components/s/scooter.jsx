import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbm9v9sot.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbm9v9sot"/>`,
		"fallback": "game-icons:scooter",
	});
}

export default Component;
