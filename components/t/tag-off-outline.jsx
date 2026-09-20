import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h39_wuqyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h39_wuqyf"/>`,
		"fallback": "mdi:tag-off-outline",
	});
}

export default Component;
