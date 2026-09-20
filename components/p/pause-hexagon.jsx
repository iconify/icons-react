import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pot-aq7pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pot-aq7pv"/>`,
		"fallback": "mynaui:pause-hexagon",
	});
}

export default Component;
