import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b430c0b3m.css';
import '../../css/t/tvql3c4ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b430c0b3m"/><path class="tvql3c4ij"/>`,
		"fallback": "mingcute:moderate-snow-fill",
	});
}

export default Component;
