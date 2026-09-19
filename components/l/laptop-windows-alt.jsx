import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wro861b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wro861b-w"/>`,
		"fallback": "cbi:laptop-windows-alt",
	});
}

export default Component;
