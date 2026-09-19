import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_k4p1q0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_k4p1q0f"/>`,
		"fallback": "cbi:subaru",
	});
}

export default Component;
