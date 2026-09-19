import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpfd2sbjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpfd2sbjn"/>`,
		"fallback": "game-icons:slow-blob",
	});
}

export default Component;
