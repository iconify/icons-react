import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb5vehukz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb5vehukz"/>`,
		"fallback": "game-icons:wall-light",
	});
}

export default Component;
