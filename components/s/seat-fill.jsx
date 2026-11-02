import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frc8xqbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frc8xqbrm"/>`,
		"fallback": "mingcute:seat-fill",
	});
}

export default Component;
