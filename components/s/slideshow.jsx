import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzv9pj7uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzv9pj7uf"/>`,
		"fallback": "bxs:slideshow",
	});
}

export default Component;
