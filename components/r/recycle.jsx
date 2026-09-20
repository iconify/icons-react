import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upz_b1bsg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upz_b1bsg"/>`,
		"fallback": "picon:recycle",
	});
}

export default Component;
