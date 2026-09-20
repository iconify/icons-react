import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn1t_absc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn1t_absc"/>`,
		"fallback": "mdi:learn",
	});
}

export default Component;
