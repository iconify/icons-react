import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doy8l7bfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doy8l7bfx"/>`,
		"fallback": "la:rocket-solid",
	});
}

export default Component;
