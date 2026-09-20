import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi6ik7bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi6ik7bvi"/>`,
		"fallback": "uit:th",
	});
}

export default Component;
