import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0lbkabqd.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0lbkabqd"/>`,
		"fallback": "fa-solid:map-pin",
	});
}

export default Component;
