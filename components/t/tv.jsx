import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqg2i0b_h.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqg2i0b_h"/>`,
		"fallback": "fa-solid:tv",
	});
}

export default Component;
