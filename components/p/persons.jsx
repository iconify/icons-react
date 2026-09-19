import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo6q0qbpz.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo6q0qbpz"/>`,
		"fallback": "fontisto:persons",
	});
}

export default Component;
