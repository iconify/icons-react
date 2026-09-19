import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdk43wh1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdk43wh1j"/>`,
		"fallback": "ion:logo-pinterest-outline",
	});
}

export default Component;
