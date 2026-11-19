import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7w4r_afr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7w4r_afr"/>`,
		"fallback": "cbi:smart-camera",
	});
}

export default Component;
