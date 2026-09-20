import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj8wl0l1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj8wl0l1r"/>`,
		"fallback": "tabler:shield-down",
	});
}

export default Component;
