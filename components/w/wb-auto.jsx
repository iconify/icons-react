import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj2ys662g.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj2ys662g"/>`,
		"fallback": "zmdi:wb-auto",
	});
}

export default Component;
