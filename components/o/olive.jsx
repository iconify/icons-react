import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4d_zkbwz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4d_zkbwz"/>`,
		"fallback": "game-icons:olive",
	});
}

export default Component;
