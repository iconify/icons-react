import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8yi8ab8x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8yi8ab8x"/>`,
		"fallback": "system-uicons:share-alt",
	});
}

export default Component;
