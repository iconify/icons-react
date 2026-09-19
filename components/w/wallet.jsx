import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5t6vubnr.css';
import '../../css/o/ow_l13b0g.css';
import '../../css/a/ambai7ovl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5t6vubnr"/><path class="ow_l13b0g"/><path class="ambai7ovl"/>`,
		"fallback": "ep:wallet",
	});
}

export default Component;
