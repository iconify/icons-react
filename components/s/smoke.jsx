import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx_8bjlap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx_8bjlap"/>`,
		"fallback": "cil:smoke",
	});
}

export default Component;
