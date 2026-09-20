import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4ysqgbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4ysqgbsv"/>`,
		"fallback": "mdi:moon-last-quarter",
	});
}

export default Component;
