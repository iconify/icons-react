import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy7a12bwj.css';

const viewBox = {"width":1792,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy7a12bwj"/>`,
		"fallback": "vs:line",
	});
}

export default Component;
