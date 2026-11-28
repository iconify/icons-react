import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx0811s7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx0811s7c"/>`,
		"fallback": "noviair-light:radio-off",
	});
}

export default Component;
