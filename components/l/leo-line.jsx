import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxx4xsbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxx4xsbrj"/>`,
		"fallback": "mingcute:leo-line",
	});
}

export default Component;
