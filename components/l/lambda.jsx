import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsjvjf5_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsjvjf5_j"/>`,
		"fallback": "game-icons:lambda",
	});
}

export default Component;
