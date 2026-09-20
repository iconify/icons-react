import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrr2rz3sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrr2rz3sn"/>`,
		"fallback": "ri:map-fill",
	});
}

export default Component;
