import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfims1-zh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfims1-zh"/>`,
		"fallback": "game-icons:terror",
	});
}

export default Component;
