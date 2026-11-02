import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eipyfoh9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eipyfoh9j"/>`,
		"fallback": "mingcute:map-pin-x-fill",
	});
}

export default Component;
