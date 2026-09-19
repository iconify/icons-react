import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs254vjqt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs254vjqt"/>`,
		"fallback": "fa7-solid:money-bill-trend-up",
	});
}

export default Component;
