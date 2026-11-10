import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uexx9pivj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uexx9pivj"/>`,
		"fallback": "simple-icons:python",
	});
}

export default Component;
