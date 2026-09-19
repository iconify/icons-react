import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/micmpg3gk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="micmpg3gk"/>`,
		"fallback": "game-icons:mine-wagon",
	});
}

export default Component;
