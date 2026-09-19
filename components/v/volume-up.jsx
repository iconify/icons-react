import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u50uczbzm.css';

const viewBox = {"width":1664,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u50uczbzm"/>`,
		"fallback": "fa:volume-up",
	});
}

export default Component;
