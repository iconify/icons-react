import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg51h9bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg51h9bve"/>`,
		"fallback": "noviair-light:paint-roller-check",
	});
}

export default Component;
