import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiqll0z-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiqll0z-s"/>`,
		"fallback": "mdi:mower",
	});
}

export default Component;
