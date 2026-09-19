import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4znhhbwn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4znhhbwn"/>`,
		"fallback": "game-icons:locked-fortress",
	});
}

export default Component;
