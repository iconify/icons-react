import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhrv8fevl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhrv8fevl"/>`,
		"fallback": "bxs:pie-chart",
	});
}

export default Component;
