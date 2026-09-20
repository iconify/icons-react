import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2db6qbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2db6qbqf"/>`,
		"fallback": "mdi:numeric-2-box-multiple",
	});
}

export default Component;
