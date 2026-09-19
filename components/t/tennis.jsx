import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w24kmmbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w24kmmbnr"/>`,
		"fallback": "ci:tennis",
	});
}

export default Component;
