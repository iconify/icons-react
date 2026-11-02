import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dszeum64l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dszeum64l"/>`,
		"fallback": "mingcute:sidebar-left-open-line",
	});
}

export default Component;
