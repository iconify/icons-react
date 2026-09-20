import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqyvnq3_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqyvnq3_j"/>`,
		"fallback": "mdi:keyboard-f1",
	});
}

export default Component;
