import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2wbkcbbb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2wbkcbbb"/>`,
		"fallback": "pullo:passport-light",
	});
}

export default Component;
