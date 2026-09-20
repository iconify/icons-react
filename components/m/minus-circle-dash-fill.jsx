import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjw_debfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjw_debfh"/>`,
		"fallback": "mingcute:minus-circle-dash-fill",
	});
}

export default Component;
