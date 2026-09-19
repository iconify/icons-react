import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k37_r3b0h.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k37_r3b0h"/>`,
		"fallback": "si-glyph:snow",
	});
}

export default Component;
