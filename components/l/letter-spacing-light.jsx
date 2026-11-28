import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkuj69bht.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkuj69bht"/>`,
		"fallback": "pullo:letter-spacing-light",
	});
}

export default Component;
