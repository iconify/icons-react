import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plfbs3b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plfbs3b-i"/>`,
		"fallback": "mingcute:text-direction-left-fill",
	});
}

export default Component;
