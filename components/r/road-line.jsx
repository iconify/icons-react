import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjt2-obxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjt2-obxt"/>`,
		"fallback": "mingcute:road-line",
	});
}

export default Component;
