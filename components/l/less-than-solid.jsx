import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0o14rb_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0o14rb_r"/>`,
		"fallback": "la:less-than-solid",
	});
}

export default Component;
