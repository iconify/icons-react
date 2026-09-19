import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llr7bwbcb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llr7bwbcb"/>`,
		"fallback": "game-icons:plastron",
	});
}

export default Component;
