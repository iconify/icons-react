import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb5l8-b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb5l8-b1r"/>`,
		"fallback": "andrsrxn:pipeline-plus",
	});
}

export default Component;
