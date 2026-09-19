import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiog0gj8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiog0gj8y"/>`,
		"fallback": "game-icons:unfriendly-fire",
	});
}

export default Component;
