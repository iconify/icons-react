import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6gualb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6gualb-u"/>`,
		"fallback": "keyline-icons:mail-x",
	});
}

export default Component;
