import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de39s79xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de39s79xi"/>`,
		"fallback": "mingcute:riding-fill",
	});
}

export default Component;
