import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvz5ev-fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvz5ev-fh"/>`,
		"fallback": "ri:rest-time-fill",
	});
}

export default Component;
