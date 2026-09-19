import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeu84ubtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeu84ubtp"/>`,
		"fallback": "circum:wave-pulse-1",
	});
}

export default Component;
