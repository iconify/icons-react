import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spo2f0bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spo2f0bzu"/>`,
		"fallback": "mingcute:meh-fill",
	});
}

export default Component;
