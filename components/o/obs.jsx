import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n82dipk4k.css';
import '../../css/z/z55h80buv.css';

const viewBox = {"width":75,"height":75};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n82dipk4k"/><path class="z55h80buv"/>`,
		"fallback": "thesvg-color:obs",
	});
}

export default Component;
