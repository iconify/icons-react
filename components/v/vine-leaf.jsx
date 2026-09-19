import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7st3j_tx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7st3j_tx"/>`,
		"fallback": "game-icons:vine-leaf",
	});
}

export default Component;
