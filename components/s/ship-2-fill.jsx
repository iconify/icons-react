import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_r22pu-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_r22pu-f"/>`,
		"fallback": "ri:ship-2-fill",
	});
}

export default Component;
