import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0y0c0b-n.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0y0c0b-n"/>`,
		"fallback": "jam:message-f",
	});
}

export default Component;
