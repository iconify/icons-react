import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwj3j5b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwj3j5b2h"/>`,
		"fallback": "uil:smile-wink-alt",
	});
}

export default Component;
