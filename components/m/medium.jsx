import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu5ad5q4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu5ad5q4z"/>`,
		"fallback": "iconoir:medium",
	});
}

export default Component;
