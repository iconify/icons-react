import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqwpjbt-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqwpjbt-m"/>`,
		"fallback": "mingcute:map-plus-fill",
	});
}

export default Component;
