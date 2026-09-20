import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cedh1bb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cedh1bb_y"/>`,
		"fallback": "mdi:star-circle-outline",
	});
}

export default Component;
