import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1qr2z6ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="reorder-outline"><path class="Vector o1qr2z6ci"/></g>`,
		"fallback": "cuida:reorder-outline",
	});
}

export default Component;
