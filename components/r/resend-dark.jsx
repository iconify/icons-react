import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4_i3vb-u.css';

const viewBox = {"width":1800,"height":1800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4_i3vb-u"/>`,
		"fallback": "thesvg-color:resend-dark",
	});
}

export default Component;
