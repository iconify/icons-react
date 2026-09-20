import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt7m3fbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt7m3fbfl"/>`,
		"fallback": "mdi:tooltip-minus-outline",
	});
}

export default Component;
