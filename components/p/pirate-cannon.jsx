import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edn50nb7e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edn50nb7e"/>`,
		"fallback": "game-icons:pirate-cannon",
	});
}

export default Component;
