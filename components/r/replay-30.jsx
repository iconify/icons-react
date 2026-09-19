import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb7td8ixk.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb7td8ixk"/>`,
		"fallback": "zmdi:replay-30",
	});
}

export default Component;
