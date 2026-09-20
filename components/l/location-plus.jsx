import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh18tub9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh18tub9i"/>`,
		"fallback": "mynaui:location-plus",
	});
}

export default Component;
