import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvq2nvpzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvq2nvpzx"/>`,
		"fallback": "mingcute:kite-fill",
	});
}

export default Component;
