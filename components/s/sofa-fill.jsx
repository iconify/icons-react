import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auvu2r1ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auvu2r1ra"/>`,
		"fallback": "mingcute:sofa-fill",
	});
}

export default Component;
