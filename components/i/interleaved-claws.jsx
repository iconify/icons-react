import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3tga9bvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3tga9bvv"/>`,
		"fallback": "game-icons:interleaved-claws",
	});
}

export default Component;
