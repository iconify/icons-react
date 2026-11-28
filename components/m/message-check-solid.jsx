import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymv6giefm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymv6giefm"/>`,
		"fallback": "iconaut:message-check-solid",
	});
}

export default Component;
