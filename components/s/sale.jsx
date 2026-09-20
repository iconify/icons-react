import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlyt45s8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlyt45s8m"/>`,
		"fallback": "mdi:sale",
	});
}

export default Component;
