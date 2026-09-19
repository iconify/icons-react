import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvd52nqvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvd52nqvm"/>`,
		"fallback": "ion:md-medkit",
	});
}

export default Component;
