import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn8nh4bdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn8nh4bdc"/>`,
		"fallback": "game-icons:tarot-13-death",
	});
}

export default Component;
