import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or-a9mb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or-a9mb5c"/>`,
		"fallback": "mingcute:large-arrow-left-fill",
	});
}

export default Component;
