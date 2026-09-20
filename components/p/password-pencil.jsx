import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lks5r8mvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lks5r8mvy"/>`,
		"fallback": "sidekickicons:password-pencil",
	});
}

export default Component;
