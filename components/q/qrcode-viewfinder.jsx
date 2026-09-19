import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3bss3zbs.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3bss3zbs"/>`,
		"fallback": "f7:qrcode-viewfinder",
	});
}

export default Component;
