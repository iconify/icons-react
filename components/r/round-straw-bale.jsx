import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twoz65bta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twoz65bta"/>`,
		"fallback": "game-icons:round-straw-bale",
	});
}

export default Component;
