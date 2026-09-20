import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us2wi3bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="us2wi3bkx"/>`,
		"fallback": "solar:square-arrow-right-bold",
	});
}

export default Component;
