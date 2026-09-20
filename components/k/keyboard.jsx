import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdpbcwi3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdpbcwi3x"/>`,
		"fallback": "ix:keyboard",
	});
}

export default Component;
