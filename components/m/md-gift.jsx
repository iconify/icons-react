import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bit1shupq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bit1shupq"/>`,
		"fallback": "ion:md-gift",
	});
}

export default Component;
