import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrjz4-ycd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrjz4-ycd"/>`,
		"fallback": "fa6-solid:power-off",
	});
}

export default Component;
