import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbe9ikuca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbe9ikuca"/>`,
		"fallback": "mynaui:rectangle",
	});
}

export default Component;
