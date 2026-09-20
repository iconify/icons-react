import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkv-isb8l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkv-isb8l"/>`,
		"fallback": "zondicons:stand-by",
	});
}

export default Component;
