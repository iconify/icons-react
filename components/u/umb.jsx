import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9fx2fb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9fx2fb_h"/>`,
		"fallback": "token:umb",
	});
}

export default Component;
