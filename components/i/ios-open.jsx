import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb8ysxktc.css';
import '../../css/r/r6esm02yb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb8ysxktc"/><path class="r6esm02yb"/>`,
		"fallback": "ion:ios-open",
	});
}

export default Component;
