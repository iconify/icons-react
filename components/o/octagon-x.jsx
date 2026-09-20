import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvx6_gzou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvx6_gzou"/>`,
		"fallback": "mynaui:octagon-x",
	});
}

export default Component;
