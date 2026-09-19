import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyflosb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyflosb7r"/>`,
		"fallback": "hugeicons:libraries",
	});
}

export default Component;
