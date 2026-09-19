import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoki9_bsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoki9_bsb"/>`,
		"fallback": "cil:view-stream",
	});
}

export default Component;
