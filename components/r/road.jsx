import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt_9d4b_y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt_9d4b_y"/>`,
		"fallback": "picon:road",
	});
}

export default Component;
