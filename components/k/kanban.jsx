import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxa_n7bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxa_n7bns"/>`,
		"fallback": "hugeicons:kanban",
	});
}

export default Component;
