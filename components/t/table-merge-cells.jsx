import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox9j4lbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox9j4lbjk"/>`,
		"fallback": "mdi:table-merge-cells",
	});
}

export default Component;
