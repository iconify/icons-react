import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd8tv7mwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd8tv7mwx"/>`,
		"fallback": "mingcute:palette-2-fill",
	});
}

export default Component;
