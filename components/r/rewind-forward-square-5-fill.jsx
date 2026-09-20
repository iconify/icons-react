import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrnmp8poh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrnmp8poh"/>`,
		"fallback": "mingcute:rewind-forward-square-5-fill",
	});
}

export default Component;
