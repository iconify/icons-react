import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj0yd0xaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj0yd0xaj"/>`,
		"fallback": "heroicons-outline:phone-missed-call",
	});
}

export default Component;
