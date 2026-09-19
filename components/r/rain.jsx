import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1zkl6b_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1zkl6b_g"/>`,
		"fallback": "carbon:rain",
	});
}

export default Component;
