import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wax2jmrhx.css';
import '../../css/a/a44ck8zrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wax2jmrhx"/><path class="a44ck8zrd"/>`,
		"fallback": "boxicons:mouse",
	});
}

export default Component;
