import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj0w1_9qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj0w1_9qx"/>`,
		"fallback": "uil:moneybag-alt",
	});
}

export default Component;
