import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6m0gsbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b6m0gsbnm"/>`,
		"fallback": "solar:logout-3-bold",
	});
}

export default Component;
