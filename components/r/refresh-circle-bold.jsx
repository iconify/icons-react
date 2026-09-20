import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr1266b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gr1266b5c"/>`,
		"fallback": "solar:refresh-circle-bold",
	});
}

export default Component;
