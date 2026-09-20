import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbccqd-dr.css';
import '../../css/y/y_4cj2byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbccqd-dr"/><path class="y_4cj2byr"/>`,
		"fallback": "streamline-ultimate:print-text-bold",
	});
}

export default Component;
