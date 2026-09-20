import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef_187bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef_187bnj"/>`,
		"fallback": "mynaui:letter-m-square-solid",
	});
}

export default Component;
