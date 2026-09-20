import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmq-2ccok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmq-2ccok"/>`,
		"fallback": "mingcute:trending-up-fill",
	});
}

export default Component;
