import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2tew1o-z.css';
import '../../css/c/cp8_n08jx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2tew1o-z"/><path class="cp8_n08jx"/>`,
		"fallback": "carbon:receipt",
	});
}

export default Component;
