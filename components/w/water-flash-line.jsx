import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti9baybtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti9baybtj"/>`,
		"fallback": "ri:water-flash-line",
	});
}

export default Component;
