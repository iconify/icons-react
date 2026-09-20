import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r54_dtb6z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r54_dtb6z"/>`,
		"fallback": "oi:layers",
	});
}

export default Component;
