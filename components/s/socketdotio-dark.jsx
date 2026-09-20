import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix5i5ubsh.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix5i5ubsh"/>`,
		"fallback": "thesvg-color:socketdotio-dark",
	});
}

export default Component;
