import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1vewfb_b.css';

const viewBox = {"width":11,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1vewfb_b"/>`,
		"fallback": "formkit:play",
	});
}

export default Component;
