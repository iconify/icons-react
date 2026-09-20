import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmebte2ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmebte2ah"/>`,
		"fallback": "solar:paint-brush-outline",
	});
}

export default Component;
