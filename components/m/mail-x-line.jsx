import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyoc15fbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyoc15fbo"/>`,
		"fallback": "mingcute:mail-x-line",
	});
}

export default Component;
