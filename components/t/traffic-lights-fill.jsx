import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9gx3uspy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9gx3uspy"/>`,
		"fallback": "mingcute:traffic-lights-fill",
	});
}

export default Component;
