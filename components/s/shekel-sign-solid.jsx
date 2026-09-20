import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tshmz1hxz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tshmz1hxz"/>`,
		"fallback": "la:shekel-sign-solid",
	});
}

export default Component;
