import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm6bjo4qj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm6bjo4qj"/>`,
		"fallback": "ix:random",
	});
}

export default Component;
