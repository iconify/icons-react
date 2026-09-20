import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb8khkb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb8khkb2z"/>`,
		"fallback": "mynaui:union",
	});
}

export default Component;
