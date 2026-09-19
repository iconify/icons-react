import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb93pobux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb93pobux"/>`,
		"fallback": "cil:lan",
	});
}

export default Component;
