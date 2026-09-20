import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz1d529op.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz1d529op"/>`,
		"fallback": "zondicons:network",
	});
}

export default Component;
