import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgr19of2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgr19of2b"/>`,
		"fallback": "mingcute:rectangle-fill",
	});
}

export default Component;
