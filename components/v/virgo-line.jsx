import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo44_mtta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo44_mtta"/>`,
		"fallback": "mingcute:virgo-line",
	});
}

export default Component;
