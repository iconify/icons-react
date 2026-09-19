import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxbpabbcv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxbpabbcv"/>`,
		"fallback": "game-icons:letter-bomb",
	});
}

export default Component;
