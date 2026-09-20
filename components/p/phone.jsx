import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wponp31yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wponp31yx"/>`,
		"fallback": "typcn:phone",
	});
}

export default Component;
