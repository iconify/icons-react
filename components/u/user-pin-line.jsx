import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozh610-un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozh610-un"/>`,
		"fallback": "mingcute:user-pin-line",
	});
}

export default Component;
