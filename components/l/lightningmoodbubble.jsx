import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw4hi5b4t.css';
import '../../css/r/r5yjrccli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw4hi5b4t"/><path class="r5yjrccli"/>`,
		"fallback": "fxemoji:lightningmoodbubble",
	});
}

export default Component;
