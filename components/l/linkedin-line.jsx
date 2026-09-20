import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy9vcx_4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy9vcx_4w"/>`,
		"fallback": "mingcute:linkedin-line",
	});
}

export default Component;
