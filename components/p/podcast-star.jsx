import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-v5hsceh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-v5hsceh"/>`,
		"fallback": "noviair-light:podcast-star",
	});
}

export default Component;
