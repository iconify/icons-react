import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2n4ycx3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2n4ycx3w"/>`,
		"fallback": "mingcute:leaf-2-line",
	});
}

export default Component;
