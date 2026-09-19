import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it7gtbc-y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it7gtbc-y"/>`,
		"fallback": "game-icons:spanner",
	});
}

export default Component;
