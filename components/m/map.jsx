import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flugi-q2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flugi-q2m"/>`,
		"fallback": "guidance:map",
	});
}

export default Component;
