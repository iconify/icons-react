import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_au83bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_au83bgz"/>`,
		"fallback": "noviair:swap",
	});
}

export default Component;
