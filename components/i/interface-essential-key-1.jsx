import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6dzgw0rm.css';
import '../../css/n/n--stkfmt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6dzgw0rm"/><path class="n--stkfmt"/>`,
		"fallback": "streamline-pixel:interface-essential-key-1",
	});
}

export default Component;
