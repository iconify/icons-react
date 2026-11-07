import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kerg8qktr.css';
import '../../css/w/wjmxqyb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kerg8qktr"/><path class="wjmxqyb4b"/>`,
		"fallback": "solar:skip-previous-bold",
	});
}

export default Component;
