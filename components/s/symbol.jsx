import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_4ensb5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_4ensb5v"/>`,
		"fallback": "subway:symbol",
	});
}

export default Component;
