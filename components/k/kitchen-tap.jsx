import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tilsz0f6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tilsz0f6e"/>`,
		"fallback": "game-icons:kitchen-tap",
	});
}

export default Component;
