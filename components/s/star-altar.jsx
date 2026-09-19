import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vext9xb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vext9xb8j"/>`,
		"fallback": "game-icons:star-altar",
	});
}

export default Component;
