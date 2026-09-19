import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exnckbcxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exnckbcxj"/>`,
		"fallback": "ion:ios-reload",
	});
}

export default Component;
