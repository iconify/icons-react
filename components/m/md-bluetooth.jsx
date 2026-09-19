import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-gg5db1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-gg5db1h"/>`,
		"fallback": "ion:md-bluetooth",
	});
}

export default Component;
