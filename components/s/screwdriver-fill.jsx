import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me3_0igul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me3_0igul"/>`,
		"fallback": "mingcute:screwdriver-fill",
	});
}

export default Component;
