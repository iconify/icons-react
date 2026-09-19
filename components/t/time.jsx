import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdaz6f6ya.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdaz6f6ya"/>`,
		"fallback": "zmdi:time",
	});
}

export default Component;
