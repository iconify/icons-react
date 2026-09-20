import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y81ss4bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y81ss4bgq"/>`,
		"fallback": "mdi:smell",
	});
}

export default Component;
