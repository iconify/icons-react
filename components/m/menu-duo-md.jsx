import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsgw3bbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsgw3bbqf"/>`,
		"fallback": "ci:menu-duo-md",
	});
}

export default Component;
