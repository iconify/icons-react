import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4gy4ccxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4gy4ccxi"/>`,
		"fallback": "mingcute:snow-fill",
	});
}

export default Component;
