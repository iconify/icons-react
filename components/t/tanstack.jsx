import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw2pvyd_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw2pvyd_v"/>`,
		"fallback": "simple-icons:tanstack",
	});
}

export default Component;
