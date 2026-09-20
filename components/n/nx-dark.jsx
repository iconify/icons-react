import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxzwpsbto.css';

const viewBox = {"width":150,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxzwpsbto"/>`,
		"fallback": "thesvg-color:nx-dark",
	});
}

export default Component;
