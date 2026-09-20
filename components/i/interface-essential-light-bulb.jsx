import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktz2u4-vt.css';
import '../../css/y/y72en9ydc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktz2u4-vt"/><path class="y72en9ydc"/>`,
		"fallback": "streamline-pixel:interface-essential-light-bulb",
	});
}

export default Component;
