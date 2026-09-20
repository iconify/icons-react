import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv0x06bdr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv0x06bdr"/>`,
		"fallback": "la:sass",
	});
}

export default Component;
