import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skuv7-l6b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skuv7-l6b"/>`,
		"fallback": "fa7-solid:list-check",
	});
}

export default Component;
