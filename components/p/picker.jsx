import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq_h_l3hb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq_h_l3hb"/>`,
		"fallback": "picon:picker",
	});
}

export default Component;
