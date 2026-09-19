import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psl9fr_lk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psl9fr_lk"/>`,
		"fallback": "game-icons:sonic-boom",
	});
}

export default Component;
