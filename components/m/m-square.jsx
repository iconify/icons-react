import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p32b85x_g.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p32b85x_g"/>`,
		"fallback": "vs:m-square",
	});
}

export default Component;
