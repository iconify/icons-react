import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2c-w6bnb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2c-w6bnb"/>`,
		"fallback": "lineicons:island",
	});
}

export default Component;
