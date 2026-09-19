import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzry2ab_u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzry2ab_u"/>`,
		"fallback": "fa7-solid:leaf",
	});
}

export default Component;
