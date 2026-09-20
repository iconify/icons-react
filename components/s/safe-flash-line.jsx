import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1pb_cbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1pb_cbyb"/>`,
		"fallback": "mingcute:safe-flash-line",
	});
}

export default Component;
