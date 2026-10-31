import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp0oxifbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp0oxifbl"/>`,
		"fallback": "withicons:send-gloss",
	});
}

export default Component;
