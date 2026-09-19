import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1ie9sb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1ie9sb_i"/>`,
		"fallback": "ci:pause-circle",
	});
}

export default Component;
