import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnuj16bsa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnuj16bsa"/>`,
		"fallback": "fa7-solid:r",
	});
}

export default Component;
