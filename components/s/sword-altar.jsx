import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omjsm0b-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omjsm0b-k"/>`,
		"fallback": "game-icons:sword-altar",
	});
}

export default Component;
