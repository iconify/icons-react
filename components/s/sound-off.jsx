import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsnd0qbhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsnd0qbhi"/>`,
		"fallback": "game-icons:sound-off",
	});
}

export default Component;
