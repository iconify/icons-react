import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmpfof1_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmpfof1_s"/>`,
		"fallback": "mdi:train-car-box-open",
	});
}

export default Component;
