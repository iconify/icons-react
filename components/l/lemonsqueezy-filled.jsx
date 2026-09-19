import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sro0m4o8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sro0m4o8e"/>`,
		"fallback": "griddy-icons:lemonsqueezy-filled",
	});
}

export default Component;
