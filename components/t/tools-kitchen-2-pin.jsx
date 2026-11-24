import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwalizb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwalizb8l"/>`,
		"fallback": "tabler:tools-kitchen-2-pin",
	});
}

export default Component;
