import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws_650b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ws_650b2o"/>`,
		"fallback": "mingcute:refresh-anticlockwise-1-fill",
	});
}

export default Component;
