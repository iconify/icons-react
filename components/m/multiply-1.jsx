import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr1r_p2bx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr1r_p2bx"/>`,
		"fallback": "subway:multiply-1",
	});
}

export default Component;
