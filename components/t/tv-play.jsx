import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnb_aj5jl.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnb_aj5jl"/>`,
		"fallback": "zmdi:tv-play",
	});
}

export default Component;
