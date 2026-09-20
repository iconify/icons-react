import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqk-xh9az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqk-xh9az"/>`,
		"fallback": "ri:pause-circle-line",
	});
}

export default Component;
