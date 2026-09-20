import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4750dbom.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4750dbom"/>`,
		"fallback": "la:ravelry",
	});
}

export default Component;
