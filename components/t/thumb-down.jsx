import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqc2c8bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqc2c8bli"/>`,
		"fallback": "heroicons-outline:thumb-down",
	});
}

export default Component;
