import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_z2pbckr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_z2pbckr"/>`,
		"fallback": "fa7-solid:ruler",
	});
}

export default Component;
