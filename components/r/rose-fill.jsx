import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilt_3uyjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilt_3uyjy"/>`,
		"fallback": "mingcute:rose-fill",
	});
}

export default Component;
