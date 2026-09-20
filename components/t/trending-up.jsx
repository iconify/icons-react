import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3o6mr5pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3o6mr5pj"/>`,
		"fallback": "mynaui:trending-up",
	});
}

export default Component;
