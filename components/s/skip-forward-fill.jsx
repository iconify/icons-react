import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s69z1x1zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s69z1x1zm"/>`,
		"fallback": "ri:skip-forward-fill",
	});
}

export default Component;
