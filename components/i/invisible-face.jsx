import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3o1v-b7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3o1v-b7g"/>`,
		"fallback": "game-icons:invisible-face",
	});
}

export default Component;
