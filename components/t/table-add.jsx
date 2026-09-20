import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn9sui-lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn9sui-lh"/>`,
		"fallback": "mdi:table-add",
	});
}

export default Component;
