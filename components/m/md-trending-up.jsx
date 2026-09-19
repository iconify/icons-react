import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t77st-b0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t77st-b0o"/>`,
		"fallback": "ion:md-trending-up",
	});
}

export default Component;
