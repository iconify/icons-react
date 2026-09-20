import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs3x60bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs3x60bhm"/>`,
		"fallback": "ri:shield-user-line",
	});
}

export default Component;
