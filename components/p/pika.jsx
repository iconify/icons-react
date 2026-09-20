import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xov_0wbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xov_0wbjn"/>`,
		"fallback": "thesvg:pika",
	});
}

export default Component;
