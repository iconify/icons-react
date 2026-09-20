import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe3j4133w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe3j4133w"/>`,
		"fallback": "ri:pause-line",
	});
}

export default Component;
