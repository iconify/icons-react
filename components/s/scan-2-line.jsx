import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltsjl198d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltsjl198d"/>`,
		"fallback": "mingcute:scan-2-line",
	});
}

export default Component;
