import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1y0yjwbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1y0yjwbk"/>`,
		"fallback": "mdi:telephone-incoming",
	});
}

export default Component;
