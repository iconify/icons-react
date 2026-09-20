import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc2pc3bcw.css';

const viewBox = {"width":1800,"height":1800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc2pc3bcw"/>`,
		"fallback": "thesvg-color:resend-light",
	});
}

export default Component;
