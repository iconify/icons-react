import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy4cmqgds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy4cmqgds"/>`,
		"fallback": "lucide:tally-2",
	});
}

export default Component;
