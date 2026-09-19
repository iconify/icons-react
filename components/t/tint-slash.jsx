import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8dze2bbp.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8dze2bbp"/>`,
		"fallback": "fa-solid:tint-slash",
	});
}

export default Component;
