import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktm_r_b_b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktm_r_b_b"/>`,
		"fallback": "picon:oil",
	});
}

export default Component;
