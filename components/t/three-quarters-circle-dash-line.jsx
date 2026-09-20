import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pige5ykcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pige5ykcc"/>`,
		"fallback": "mingcute:three-quarters-circle-dash-line",
	});
}

export default Component;
