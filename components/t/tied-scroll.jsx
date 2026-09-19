import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytjf0pb0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytjf0pb0f"/>`,
		"fallback": "game-icons:tied-scroll",
	});
}

export default Component;
