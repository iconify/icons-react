import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxwo4vb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxwo4vb_i"/>`,
		"fallback": "thesvg-color:itvx",
	});
}

export default Component;
