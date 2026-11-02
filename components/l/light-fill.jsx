import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slf_ohb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slf_ohb_k"/>`,
		"fallback": "mingcute:light-fill",
	});
}

export default Component;
