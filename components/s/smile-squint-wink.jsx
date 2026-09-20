import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcb5u9bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcb5u9bmt"/>`,
		"fallback": "uil:smile-squint-wink",
	});
}

export default Component;
