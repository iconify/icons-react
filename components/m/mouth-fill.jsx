import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viiiu8boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viiiu8boy"/>`,
		"fallback": "mingcute:mouth-fill",
	});
}

export default Component;
