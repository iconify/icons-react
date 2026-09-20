import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jus_r3b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jus_r3b3e"/>`,
		"fallback": "mynaui:map",
	});
}

export default Component;
