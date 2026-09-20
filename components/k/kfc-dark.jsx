import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd6a86fya.css';

const viewBox = {"width":150,"height":111};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd6a86fya"/>`,
		"fallback": "thesvg-color:kfc-dark",
	});
}

export default Component;
