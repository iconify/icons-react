import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkg31wasg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkg31wasg"/>`,
		"fallback": "mingcute:minimize-line",
	});
}

export default Component;
