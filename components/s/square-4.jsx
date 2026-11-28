import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7s-hxb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7s-hxb8p"/>`,
		"fallback": "noviair-light:square-4",
	});
}

export default Component;
