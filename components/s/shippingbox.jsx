import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdz380bpj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdz380bpj"/>`,
		"fallback": "f7:shippingbox",
	});
}

export default Component;
