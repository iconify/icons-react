import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6gxh7bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6gxh7bkf"/>`,
		"fallback": "noviair-light:tulip",
	});
}

export default Component;
