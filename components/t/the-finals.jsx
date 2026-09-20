import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3x_a9b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3x_a9b1c"/>`,
		"fallback": "thesvg-color:the-finals",
	});
}

export default Component;
