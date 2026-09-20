import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3ttpkc6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3ttpkc6s"/>`,
		"fallback": "mdi:set-left-right",
	});
}

export default Component;
