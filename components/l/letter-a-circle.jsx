import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrvzk5n_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrvzk5n_r"/>`,
		"fallback": "mdi:letter-a-circle",
	});
}

export default Component;
