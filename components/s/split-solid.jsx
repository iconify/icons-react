import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmmystb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmmystb9e"/>`,
		"fallback": "withicons:split-solid",
	});
}

export default Component;
