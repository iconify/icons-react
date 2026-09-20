import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_2tle25d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_2tle25d"/>`,
		"fallback": "mingcute:scan-2-fill",
	});
}

export default Component;
