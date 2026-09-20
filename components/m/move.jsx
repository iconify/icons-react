import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr8ng8mre.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr8ng8mre"/>`,
		"fallback": "system-uicons:move",
	});
}

export default Component;
