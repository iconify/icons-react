import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhc5k_b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhc5k_b2y"/>`,
		"fallback": "cbi:wall-spot",
	});
}

export default Component;
