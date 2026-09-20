import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb9q3xbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb9q3xbwi"/>`,
		"fallback": "mdi:peace",
	});
}

export default Component;
