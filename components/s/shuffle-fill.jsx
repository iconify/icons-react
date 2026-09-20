import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym-e9bb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym-e9bb_q"/>`,
		"fallback": "mingcute:shuffle-fill",
	});
}

export default Component;
