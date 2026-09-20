import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxwun1osp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxwun1osp"/>`,
		"fallback": "mynaui:slash-diamond",
	});
}

export default Component;
