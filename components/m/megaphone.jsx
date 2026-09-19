import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc3l9v3wz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc3l9v3wz"/>`,
		"fallback": "foundation:megaphone",
	});
}

export default Component;
