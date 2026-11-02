import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g72_w6bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g72_w6bzg"/>`,
		"fallback": "mingcute:rewind-backward-5-fill",
	});
}

export default Component;
