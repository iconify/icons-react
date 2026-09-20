import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbgxfd0gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbgxfd0gy"/>`,
		"fallback": "typcn:mail",
	});
}

export default Component;
