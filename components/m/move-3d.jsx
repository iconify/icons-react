import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6xyg1bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6xyg1bap"/>`,
		"fallback": "andrsrxn:move-3d",
	});
}

export default Component;
