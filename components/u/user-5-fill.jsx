import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhmp2zy9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhmp2zy9u"/>`,
		"fallback": "mingcute:user-5-fill",
	});
}

export default Component;
