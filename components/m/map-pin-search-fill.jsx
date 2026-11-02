import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq9y-x28s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq9y-x28s"/>`,
		"fallback": "mingcute:map-pin-search-fill",
	});
}

export default Component;
