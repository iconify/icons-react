import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u35k7d0yo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u35k7d0yo"/>`,
		"fallback": "pullo:user-circle-star-bold",
	});
}

export default Component;
