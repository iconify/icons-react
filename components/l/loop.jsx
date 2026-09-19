import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yanfh6bbv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yanfh6bbv"/>`,
		"fallback": "fad:loop",
	});
}

export default Component;
