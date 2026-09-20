import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wod1mxbvc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wod1mxbvc"/>`,
		"fallback": "la:stop-circle-solid",
	});
}

export default Component;
