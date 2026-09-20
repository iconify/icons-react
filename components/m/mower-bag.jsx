import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycg7u9b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycg7u9b5s"/>`,
		"fallback": "mdi:mower-bag",
	});
}

export default Component;
