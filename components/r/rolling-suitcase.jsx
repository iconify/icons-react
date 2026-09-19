import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq8ap1beo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq8ap1beo"/>`,
		"fallback": "game-icons:rolling-suitcase",
	});
}

export default Component;
