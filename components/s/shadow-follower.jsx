import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swg-av1ww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swg-av1ww"/>`,
		"fallback": "game-icons:shadow-follower",
	});
}

export default Component;
