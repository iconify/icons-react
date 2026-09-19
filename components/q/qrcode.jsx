import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_a55lb8v.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_a55lb8v"/>`,
		"fallback": "fa:qrcode",
	});
}

export default Component;
