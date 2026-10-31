import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou0e18q7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou0e18q7c"/>`,
		"fallback": "coolicons:square-chevron-down-round",
	});
}

export default Component;
