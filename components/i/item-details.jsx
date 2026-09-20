import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjfxb6cvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjfxb6cvt"/>`,
		"fallback": "ix:item-details",
	});
}

export default Component;
