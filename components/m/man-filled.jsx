import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdw-doqfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdw-doqfr"/>`,
		"fallback": "reicon:man-filled",
	});
}

export default Component;
