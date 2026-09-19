import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5qyp_bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5qyp_bai"/>`,
		"fallback": "ci:timer-add",
	});
}

export default Component;
