import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_1_-gb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_1_-gb5e"/>`,
		"fallback": "mingcute:layout-top-close-line",
	});
}

export default Component;
