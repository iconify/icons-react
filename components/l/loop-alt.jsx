import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx_x97izc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx_x97izc"/>`,
		"fallback": "carbon:loop-alt",
	});
}

export default Component;
