import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agc4itbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agc4itbdh"/>`,
		"fallback": "ri:nurse-line",
	});
}

export default Component;
