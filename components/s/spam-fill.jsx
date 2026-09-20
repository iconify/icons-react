import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-tu_s2fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-tu_s2fd"/>`,
		"fallback": "ri:spam-fill",
	});
}

export default Component;
