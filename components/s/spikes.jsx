import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c21f6tbvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c21f6tbvu"/>`,
		"fallback": "game-icons:spikes",
	});
}

export default Component;
