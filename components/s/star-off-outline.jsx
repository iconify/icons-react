import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb_3_72qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb_3_72qp"/>`,
		"fallback": "mdi:star-off-outline",
	});
}

export default Component;
