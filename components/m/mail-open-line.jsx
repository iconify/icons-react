import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1dbuz50l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1dbuz50l"/>`,
		"fallback": "mingcute:mail-open-line",
	});
}

export default Component;
