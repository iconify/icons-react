import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rufqdqr3i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rufqdqr3i"/>`,
		"fallback": "picon:ski",
	});
}

export default Component;
