import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhhhe_a6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhhhe_a6d"/>`,
		"fallback": "game-icons:level-four",
	});
}

export default Component;
