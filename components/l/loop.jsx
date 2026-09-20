import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj30-ccum.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj30-ccum"/>`,
		"fallback": "oi:loop",
	});
}

export default Component;
