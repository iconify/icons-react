import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz3qcy9av.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz3qcy9av"/>`,
		"fallback": "game-icons:lightning-electron",
	});
}

export default Component;
