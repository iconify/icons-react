import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6f6i0bcx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6f6i0bcx"/>`,
		"fallback": "carbon:tools",
	});
}

export default Component;
