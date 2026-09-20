import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh5f-2kxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh5f-2kxp"/>`,
		"fallback": "mdi:letter-s-box",
	});
}

export default Component;
