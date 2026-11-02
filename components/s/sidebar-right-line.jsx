import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aweq1wx_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aweq1wx_w"/>`,
		"fallback": "mingcute:sidebar-right-line",
	});
}

export default Component;
