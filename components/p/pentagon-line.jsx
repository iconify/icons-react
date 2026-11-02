import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp4kg59fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp4kg59fy"/>`,
		"fallback": "mingcute:pentagon-line",
	});
}

export default Component;
