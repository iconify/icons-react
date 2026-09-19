import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrn2e5z6j.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrn2e5z6j"/>`,
		"fallback": "fa:product-hunt",
	});
}

export default Component;
