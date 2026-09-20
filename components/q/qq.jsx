import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx87aaciu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx87aaciu"/>`,
		"fallback": "la:qq",
	});
}

export default Component;
