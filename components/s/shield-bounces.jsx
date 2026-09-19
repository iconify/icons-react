import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl1w99b7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl1w99b7h"/>`,
		"fallback": "game-icons:shield-bounces",
	});
}

export default Component;
