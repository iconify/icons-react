import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7zp-dbvy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7zp-dbvy"/>`,
		"fallback": "subway:paragraph-9",
	});
}

export default Component;
