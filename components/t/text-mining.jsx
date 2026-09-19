import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5zn4-brr.css';
import '../../css/z/zxlwz1bsp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5zn4-brr"/><path class="zxlwz1bsp"/>`,
		"fallback": "carbon:text-mining",
	});
}

export default Component;
