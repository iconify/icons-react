import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmejw90ec.css';
import '../../css/b/b8av53bdl.css';
import '../../css/b/bncxwo81m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmejw90ec"/><path class="b8av53bdl"/><path class="bncxwo81m"/>`,
		"fallback": "ion:ios-albums",
	});
}

export default Component;
