import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv9whnb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv9whnb6u"/>`,
		"fallback": "iconaut:tooth-solid",
	});
}

export default Component;
