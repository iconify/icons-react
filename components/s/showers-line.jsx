import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-om3ebjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-om3ebjl"/>`,
		"fallback": "mingcute:showers-line",
	});
}

export default Component;
