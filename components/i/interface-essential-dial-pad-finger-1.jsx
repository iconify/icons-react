import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcvdhlb9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcvdhlb9e"/>`,
		"fallback": "streamline-pixel:interface-essential-dial-pad-finger-1",
	});
}

export default Component;
