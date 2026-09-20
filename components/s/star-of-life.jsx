import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzqt8ge1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzqt8ge1j"/>`,
		"fallback": "la:star-of-life",
	});
}

export default Component;
