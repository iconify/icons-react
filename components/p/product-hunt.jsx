import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kql4cwbwx.css';
import '../../css/t/td28wmbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kql4cwbwx"/><path class="td28wmbob"/>`,
		"fallback": "pixel:product-hunt",
	});
}

export default Component;
