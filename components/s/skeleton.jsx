import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hch4c9obq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hch4c9obq"/>`,
		"fallback": "game-icons:skeleton",
	});
}

export default Component;
