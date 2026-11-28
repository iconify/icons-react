import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh0izzb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh0izzb_c"/>`,
		"fallback": "iconaut:message-square-info-solid",
	});
}

export default Component;
