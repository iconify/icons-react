import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo46cwbkr.css';
import '../../css/y/y1bea5b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo46cwbkr"/><path class="y1bea5b9l"/>`,
		"fallback": "bxl:remix-js",
	});
}

export default Component;
