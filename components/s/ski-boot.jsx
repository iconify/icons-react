import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr57siaux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr57siaux"/>`,
		"fallback": "game-icons:ski-boot",
	});
}

export default Component;
