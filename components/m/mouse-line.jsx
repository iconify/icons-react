import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeee7tb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeee7tb5x"/>`,
		"fallback": "mingcute:mouse-line",
	});
}

export default Component;
