import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_14azb-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_14azb-j"/>`,
		"fallback": "ion:ios-globe",
	});
}

export default Component;
