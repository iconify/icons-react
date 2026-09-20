import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cegq8hbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cegq8hbfi"/>`,
		"fallback": "mynaui:move-vertical-solid",
	});
}

export default Component;
