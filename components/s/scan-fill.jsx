import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri4agxb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri4agxb9x"/>`,
		"fallback": "mingcute:scan-fill",
	});
}

export default Component;
