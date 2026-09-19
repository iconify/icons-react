import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp1tngb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp1tngb8i"/>`,
		"fallback": "ci:move",
	});
}

export default Component;
