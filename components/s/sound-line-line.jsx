import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywdt5hb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywdt5hb_o"/>`,
		"fallback": "mingcute:sound-line-line",
	});
}

export default Component;
