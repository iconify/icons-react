import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw_9acb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw_9acb2g"/>`,
		"fallback": "weui:volume-down-filled",
	});
}

export default Component;
