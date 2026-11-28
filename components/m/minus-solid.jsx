import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu-7-6b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu-7-6b_j"/>`,
		"fallback": "iconaut:minus-solid",
	});
}

export default Component;
