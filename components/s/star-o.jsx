import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf-r26bgx.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf-r26bgx"/>`,
		"fallback": "iwwa:star-o",
	});
}

export default Component;
