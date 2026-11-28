import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb7y0rb1q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb7y0rb1q"/>`,
		"fallback": "pullo:steak-light",
	});
}

export default Component;
