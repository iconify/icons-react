import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj4y_q__z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj4y_q__z"/>`,
		"fallback": "pinhead:sobbing-face",
	});
}

export default Component;
