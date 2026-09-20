import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzubqt2mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzubqt2mh"/>`,
		"fallback": "mingcute:moon-cloudy-fill",
	});
}

export default Component;
