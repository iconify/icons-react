import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts5h3obps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts5h3obps"/>`,
		"fallback": "game-icons:spinning-top",
	});
}

export default Component;
