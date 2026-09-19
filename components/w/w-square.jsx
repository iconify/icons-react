import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3-k1fbnj.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3-k1fbnj"/>`,
		"fallback": "vs:w-square",
	});
}

export default Component;
