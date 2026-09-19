import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oik8_tbep.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oik8_tbep"/>`,
		"fallback": "ion:md-tablet-landscape",
	});
}

export default Component;
