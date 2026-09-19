import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhp76k4yd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhp76k4yd"/>`,
		"fallback": "carbon:mapping-show",
	});
}

export default Component;
