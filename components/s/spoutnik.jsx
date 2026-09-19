import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtsh8whyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtsh8whyo"/>`,
		"fallback": "game-icons:spoutnik",
	});
}

export default Component;
