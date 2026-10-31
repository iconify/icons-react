import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk4_q26ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk4_q26ia"/>`,
		"fallback": "cbi:lenovo",
	});
}

export default Component;
