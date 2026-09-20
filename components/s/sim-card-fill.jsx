import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ustlblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-ustlblo"/>`,
		"fallback": "ri:sim-card-fill",
	});
}

export default Component;
