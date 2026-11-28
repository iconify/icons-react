import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5957gb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5957gb8i"/>`,
		"fallback": "iconaut:send-solid",
	});
}

export default Component;
