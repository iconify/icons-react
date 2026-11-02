import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh7b57y_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh7b57y_k"/>`,
		"fallback": "mingcute:siri-line",
	});
}

export default Component;
