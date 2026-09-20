import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbasz78dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbasz78dg"/>`,
		"fallback": "mingcute:truck-fill",
	});
}

export default Component;
