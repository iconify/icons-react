import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omu-7_bkt.css';
import '../../css/y/yi7yklpos.css';
import '../../css/l/li6tqsbtx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omu-7_bkt"/><path class="yi7yklpos"/><path class="li6tqsbtx"/>`,
		"fallback": "ion:ios-gift",
	});
}

export default Component;
