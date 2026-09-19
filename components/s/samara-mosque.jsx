import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fupxjt7mc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fupxjt7mc"/>`,
		"fallback": "game-icons:samara-mosque",
	});
}

export default Component;
