import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ron99bb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ron99bb4k"/>`,
		"fallback": "game-icons:paw",
	});
}

export default Component;
