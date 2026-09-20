import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfvx0vbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfvx0vbqd"/>`,
		"fallback": "lucide:map-pin-minus-inside",
	});
}

export default Component;
