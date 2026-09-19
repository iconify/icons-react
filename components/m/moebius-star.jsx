import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knfdt1uek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knfdt1uek"/>`,
		"fallback": "game-icons:moebius-star",
	});
}

export default Component;
