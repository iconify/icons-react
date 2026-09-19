import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuf4_ybad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuf4_ybad"/>`,
		"fallback": "ci:stack-overflow",
	});
}

export default Component;
