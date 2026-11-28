import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0mqs8vsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0mqs8vsj"/>`,
		"fallback": "iconaut:skip-back-solid",
	});
}

export default Component;
