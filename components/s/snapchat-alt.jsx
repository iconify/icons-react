import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieuo3rbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieuo3rbby"/>`,
		"fallback": "uil:snapchat-alt",
	});
}

export default Component;
