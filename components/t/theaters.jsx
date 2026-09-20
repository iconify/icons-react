import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j60fy-bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j60fy-bcw"/>`,
		"fallback": "mdi:theaters",
	});
}

export default Component;
