import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjp9ywjxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjp9ywjxy"/>`,
		"fallback": "uil:lock-open-alt",
	});
}

export default Component;
