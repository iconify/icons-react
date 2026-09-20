import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsjr3bb8r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsjr3bb8r"/>`,
		"fallback": "picon:underline",
	});
}

export default Component;
