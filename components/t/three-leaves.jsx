import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-00757da.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-00757da"/>`,
		"fallback": "game-icons:three-leaves",
	});
}

export default Component;
