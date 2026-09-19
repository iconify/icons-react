import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb0sabbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb0sabbfe"/>`,
		"fallback": "bx:sort-z-a",
	});
}

export default Component;
