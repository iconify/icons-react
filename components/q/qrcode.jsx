import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg9u1fbeg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg9u1fbeg"/>`,
		"fallback": "fa7-solid:qrcode",
	});
}

export default Component;
