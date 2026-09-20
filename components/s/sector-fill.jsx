import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muf2sjrtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muf2sjrtx"/>`,
		"fallback": "mingcute:sector-fill",
	});
}

export default Component;
