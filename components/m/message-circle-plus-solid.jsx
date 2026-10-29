import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzh__gl_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzh__gl_m"/>`,
		"fallback": "withicons:message-circle-plus-solid",
	});
}

export default Component;
